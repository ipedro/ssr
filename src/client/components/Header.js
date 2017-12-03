import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'react-emotion'

const Nav = styled('div')`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fca900;
  a {
    color: #31343f;
    font-family: Arial;
    font-weight: bold;
    text-decoration: none;
    margin-left: 10px;
  }
`

const Block = styled('dvi')`
  display: flex;
  align-items: center;
  margin-right: ${props => (props.right ? '20px' : '0')};
  margin-left: ${props => (props.left ? '20px' : '0')};
`

const Header = ({ auth }) => (
  <Nav>
    <Block left>
      <Link to="/">React SSR</Link>
    </Block>
    <Block right>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admins</Link>
      {auth ? <a href="api/logout">Logout</a> : <a href="api/auth/google">Login</a>}
    </Block>
  </Nav>
)

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      _id: PropTypes.string,
      googleId: PropTypes.string,
      __v: PropTypes.number,
    }),
  ]).isRequired,
}

export default connect(state => ({ auth: state.auth }))(Header)
