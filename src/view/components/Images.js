import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  CircularProgress,
  Button,
  ImageList,
  ImageListItem,
  Container,
} from '@mui/material'
import { SUCCESS, FAILED, LOADING } from '../../constVariable'
import { getDataPicsum } from '../../features/fetchImagesApiSlice'

const Images = () => {
  const dispatch = useDispatch()
  const statePicsum = useSelector((state) => state.images)

  if (statePicsum.status === FAILED) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        Error load payload. Try again.
      </Box>
    )
  }

  return (
    <Container maxWidth="md">
      <Button
        onClick={() => {
          dispatch(getDataPicsum())
        }}
        variant="contained"
      >
        Get Images
      </Button>
      {statePicsum.status === LOADING && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {statePicsum.status === SUCCESS && (
        <ImageList cols={5} rowHeight={164}>
          {statePicsum.data.map((el) => (
            <ImageListItem key={el.id}>
              <img src={el.download_url} alt={el.author} />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Container>
  )
}

export default Images
