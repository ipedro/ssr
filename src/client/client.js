// Startup point for the client side application
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Routes from './Routes'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

hydrate(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.querySelector('#root'),
)
