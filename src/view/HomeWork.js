import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { Message } from './view/components/Message'
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  List,
  ListItem,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getDataJsonPlaceholder } from '../features/fetchApiSlice'

function App() {
  const [messageList, setMessageList] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const stateJsonPlaceholder = useSelector((state) => state.fetchJP)

  useEffect(() => {
    dispatch(getDataJsonPlaceholder())
  }, [])

  console.log('state', stateJsonPlaceholder)

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
