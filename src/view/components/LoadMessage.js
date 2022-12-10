import { useEffect } from 'react'
import { Message } from './Message'
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
import { getDataJsonPlaceholder } from '../../features/fetchApiSlice'
import { SUCCESS, FAILED } from '../../constVariable'
import { deleteMessage } from '../../features/fetchApiSlice'
import ButtonCustom from '../ui/Button'

function LoadMessage() {
  const dispatch = useDispatch()
  const stateJsonPlaceholder = useSelector((state) => state.fetchJP)

  useEffect(() => {
    dispatch(getDataJsonPlaceholder())
    // eslint-disable-next-line
  }, [])

  if (stateJsonPlaceholder.status !== SUCCESS) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (stateJsonPlaceholder.status === FAILED) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        Error load payload. Try again.
      </Box>
    )
  }

  return (
    <Container style={{ paddingTop: '40px' }} maxWidth="md">
      {stateJsonPlaceholder.data.map((el) => (
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
              <Typography>user: {el.userId}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Title: {el.title}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Body: {el.body}</Typography>
            </ListItem>
            <ButtonCustom
              variant="contained"
              onClick={() => {
                dispatch(deleteMessage(el.id))
              }}
            >
              Delete message
            </ButtonCustom>
          </Grid>
        </List>
      ))}
      <Message />
    </Container>
  )
}

export default LoadMessage
