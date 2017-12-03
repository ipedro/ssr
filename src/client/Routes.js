import App from './App'
import Home from './pages/Home'
import UserList from './pages/UserList'
import NotFound from './pages/NotFound'
import Admins from './pages/Admins'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...UserList,
        path: '/users',
      },
      {
        ...Admins,
        path: '/admins',
      },
      {
        ...NotFound,
      },
    ],
  },
]
