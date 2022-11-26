import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import routes from './routes'
import theme from './theme'

function App() {
  const content = useRoutes(routes)

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>
}

export default App
