import FirebaseApp from '../config/FirebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IDLE, SUCCESS, FAILED, LOADING } from '../constVariable'

const initialState = {
  status: IDLE,
  data: null,
}

/**
 *
 * @returns {Promise}
 */
const fetchAuthState = () => {
  return new Promise((res, rej) => {
    const auth = getAuth(FirebaseApp)
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          res(user)
        } else {
          res(null)
        }
      },
      (error) => {
        rej(error)
      }
    )
  })
}

export const getDataAuthState = createAsyncThunk('get/authState', async () => {
  try {
    const data = await fetchAuthState()
    return data
  } catch (error) {
    console.error(error)
  }
})

export const fetchAuthStateSlice = createSlice({
  name: 'fetchAuthState',
  initialState,
  reducers: {},
  extraReducers: {
    [getDataAuthState.pending]: (state, action) => {
      state.status = LOADING
    },
    [getDataAuthState.fulfilled]: (state, action) => {
      state.status = SUCCESS
      state.data = action.payload
    },
    [getDataAuthState.rejected]: (state, action) => {
      state.status = FAILED
    },
  },
})

export default fetchAuthStateSlice.reducer
