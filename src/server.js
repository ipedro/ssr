import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import routes from './client/routes'

const app = express()

// Proxy to send request to handle requests for protected content from the API, inside the server,
// thus keeping the cookies being automatically sent.
// Proxy decorator deal with Google OAuth flow
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    },
  }),
)

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if (promise) {
        // ensures that all items in the promises array are executed,
        // even if one or more of them result in an error.
        return new Promise((res) => {
          promise.then(res).catch(res)
        })
      }
      return null
    })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)
    if (context.notFound) {
      res.status(404)
    }
    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
