import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import routes from './routes'
import theme from './theme'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAuthState } from './features/authFirebaseSlice'
import { useEffect } from 'react'

function App() {
  const authState = useSelector((state) => state.fetchAuthState)
  const dispatch = useDispatch()
  const content = useRoutes(routes)

  useEffect(() => {
    dispatch(getDataAuthState())
  }, [])

  console.log('auth', authState)

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>
}

export default App
