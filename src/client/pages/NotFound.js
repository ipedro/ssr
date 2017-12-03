import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  font-family: Arial;
`

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <Container>
      <h4>These aren't the Droids you're looking for. . .</h4>
    </Container>
  )
}

NotFound.propTypes = {
  staticContext: PropTypes.object,
}

NotFound.defaultProps = {
  staticContext: {},
}

export default {
  component: NotFound,
}
