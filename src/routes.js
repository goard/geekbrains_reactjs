import { Navigate } from 'react-router-dom'
import Layout from './view/components/Layout'
import Account from './view/components/Account'
import Dashboard from './view/components/Dashboard'
import NotFound from './view/components/NotFound'
import Images from './view/components/Images'
import Signin from './view/components/Signin'
import Signup from './view/components/Signup'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'images', element: <Images /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: 'signin', element: <Signin /> },
      { path: 'signup', element: <Signup /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]

export default routes
