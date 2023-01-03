import {
  Button,
  OutlinedInput,
  Typography,
  Container,
  Box,
} from '@mui/material'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import FirebaseApp from '../../config/FirebaseConfig'

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const submitHandler = async (event) => {
    event.preventDefault()
    const auth = getAuth(FirebaseApp)
    // console.log('auth', auth)
    await signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const changeHandler = (event) => {
    event.preventDefault()
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ marginTop: '25px' }} variant="h4">
          Signin
        </Typography>
        <form onSubmit={submitHandler}>
          <Box mt="15px">
            <OutlinedInput
              name="email"
              placeholder="email"
              required
              type="email"
              value={form.email}
              onChange={changeHandler}
            />
          </Box>
          <Box mt="15px">
            <OutlinedInput
              name="password"
              placeholder="password"
              required
              type="password"
              value={form.password}
              onChange={changeHandler}
            />
          </Box>

          <Button
            fullWidth
            sx={{ marginTop: '15px' }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}

export default Signin
