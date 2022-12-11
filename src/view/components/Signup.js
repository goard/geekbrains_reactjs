import { useState } from 'react'
import FirebaseApp from '../../config/FirebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  Container,
  Typography,
  Box,
  OutlinedInput,
  Button,
} from '@mui/material'
const Signup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [checkPassword, setCheckPassword] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    const auth = getAuth(FirebaseApp)
    console.log('auth', auth)
    if (form.password.toString() === form.confirmPassword.toString()) {
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
        })
        .catch((error) => {
          console.log('error', error)
        })
    } else {
      setCheckPassword(true)
    }
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
          Sign Up
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
          <Box mt="15px">
            <OutlinedInput
              name="confirmPassword"
              placeholder="confirm password"
              required
              type="password"
              value={form.confirmPassword}
              onChange={changeHandler}
            />
          </Box>
          <Box>{checkPassword ? 'Password do not passed' : ''}</Box>
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

export default Signup
