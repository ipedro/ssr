import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { fetchUsers } from '../actions'

class UserList extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }

  static defaultProps = {
    users: [],
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users } = this.props
    return (
      <div>
        <Helmet>
          <title>Users List</title>
          <meta property="og:title" content="Users List" />
        </Helmet>
        <h3>Open list of users</h3>
        <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
      </div>
    )
  }
}

export const loadData = store => store.dispatch(fetchUsers())

export default {
  loadData,
  component: connect(state => ({ users: state.users }), { fetchUsers })(UserList),
}
