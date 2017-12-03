import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'
import { extractCritical } from 'emotion-server'
import { StaticRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

import routes from '../client/routes'

export default (req, store, context) => {
  const app = (
    <Provider store={store}>
      <Router location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </Router>
    </Provider>
  )

  // SEO support:
  const helmet = Helmet.renderStatic()
  const meta = helmet.meta.toString()
  const title = helmet.title.toString()

  const content = renderToString(app)

  const { ids, css } = extractCritical(content)

  // window.INITIAL_STATE Hydrate the client store with the server store

  return `
    <html>
      <head>
        ${meta}
        ${title}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script>
          window.INITIAL_STYLE = ${serialize(ids)}
        </script>
        <style>
          ${css}
        </style>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
