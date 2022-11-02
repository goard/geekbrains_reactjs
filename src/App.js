import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { Message } from './components/Message'
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  List,
  ListItem,
} from '@mui/material'

function App() {
  const [messageList, setMessageList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function () {
      setLoading(true)
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users?_start=0&_end=3'
        )
        const data = await response.json()
        setMessageList(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container style={{ paddingTop: '40px' }} maxWidth="md">
      {messageList.map((el) => (
        <List
          key={el.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Grid>
            <ListItem>
              <Typography>Name: {el.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Email: {el.email}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Phone: {el.phone}</Typography>
            </ListItem>
          </Grid>
          <Message data={el} />
        </List>
      ))}
    </Container>
  )
}

export default App
