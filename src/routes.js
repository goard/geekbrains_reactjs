import { Navigate } from 'react-router-dom'
import Layout from './view/components/Layout'
import Account from './view/components/Account'
import Dashboard from './view/components/Dashboard'
import NotFound from './view/components/NotFound'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'dashboard/:id', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]

export default routes
