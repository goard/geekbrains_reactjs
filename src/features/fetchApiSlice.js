import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IDLE, LOADING, SUCCESS, FAILED } from '../constVariable'

const initialState = {
  status: IDLE,
  data: [],
}

/**
 *
 * @returns {Promise}
 */
const fetchJsonPlaceholder = () => {
  return new Promise((res, rej) => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=3')
      .then((response) => response.json())
      .then((payload) => res(payload))
      .catch((error) => rej(error))
  })
}

export const getDataJsonPlaceholder = createAsyncThunk('get', async () => {
  const data = await fetchJsonPlaceholder()
  return data
})

export const fetchJsonPlaceholderSlice = createSlice({
  name: 'fetchJsonPlaceholder',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.data.push(action.payload)
    },
    deleteMessage: (state, action) => {
      console.log('payload', action)
      state.data = state.data.filter((el) => el.id !== action.payload)
    },
  },
  extraReducers: {
    [getDataJsonPlaceholder.pending]: (state, action) => {
      state.status = LOADING
    },
    [getDataJsonPlaceholder.fulfilled]: (state, action) => {
      state.status = SUCCESS
      state.data = [...action.payload]
    },
    [getDataJsonPlaceholder.rejected]: (state, action) => {
      state.status = FAILED
    },
  },
})

export const { addMessage, deleteMessage } = fetchJsonPlaceholderSlice.actions

export default fetchJsonPlaceholderSlice.reducer
