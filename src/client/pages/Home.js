import React from 'react'
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

const Button = styled('button')`
  padding: 12px;
  color: #eee;
  font-weight: bold;
  border-radiux: 8px;
  background-color: #fca900;
  border: none;
`

const Home = () => (
  <Container>
    <h4>Home</h4>
    <Button onClick={() => console.log('Hi there!')}>Press me!</Button>
  </Container>
)

export default {
  component: Home,
}
