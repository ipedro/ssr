import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'

export default (req) => {
  // It fools the API so that it thinks that the call is being made by the user and not by the
  // rendering server, so it will have access to the cookie.
  const axiosInstance = axios.create({
    baseURL: 'https://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  })
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

  return store
}
