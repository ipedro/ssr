import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hoc/requireAuth'

class AdminsListPage extends Component {
  static propTypes = {
    fetchAdmins: PropTypes.func.isRequired,
    admins: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }

  static defaultProps = {
    admins: [],
  }

  componentDidMount() {
    this.props.fetchAdmins()
  }

  render() {
    const { admins } = this.props
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{admins.map(admin => <li key={admin.id}>{admin.name}</li>)}</ul>
      </div>
    )
  }
}

export default {
  component: connect(({ admins }) => ({ admins }), { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
}
