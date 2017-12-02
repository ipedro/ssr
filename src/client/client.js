// Startup point for the client side application
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { renderRoutes } from 'react-router-config'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import routes from './routes'
import reducers from './reducers'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(routes)}</div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
)
