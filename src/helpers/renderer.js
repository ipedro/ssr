import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from '../client/routes'

export default (req, store) => {
  const content = renderToString(<Provider store={store}>
    <Router location={req.path} context={{}}>
      <div>{renderRoutes(routes)}</div>
    </Router>
  </Provider>)

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
