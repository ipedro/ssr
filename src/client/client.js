// Startup point for the client side application
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { renderRoutes } from 'react-router-config'
import { hydrate as emotionHydrate } from 'emotion'
import axios from 'axios'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import routes from './routes'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api',
})

const middlewares = [thunk.withExtraArgument(axiosInstance)]

/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

// Rehydrate with server store with window.INITIAL_STATE and passes the instance of the axios
// created above, for each action, so we can use different endpoints on the server and the client.
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(...middlewares))

emotionHydrate(window.INITIAL_STYLE)

hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(routes)}</div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
)
