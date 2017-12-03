import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

import { fetchCurrentUser } from './actions'

import Header from './components/Header'

const App = ({ route }) => (
  <div>
    <Header />
    <div>{renderRoutes(route.routes)}</div>
  </div>
)

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({ path: PropTypes.string, exact: PropTypes.bool })),
  }).isRequired,
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
}
