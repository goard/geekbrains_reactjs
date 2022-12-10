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
const fetchPicsum = () => {
  return new Promise((res, rej) => {
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
      .then((response) => response.json())
      .then((payload) => res(payload))
      .catch((error) => rej(error))
  })
}

export const getDataPicsum = createAsyncThunk('get/images', async () => {
  const data = await fetchPicsum()
  return data
})

export const fetchPicsumSlice = createSlice({
  name: 'fetchPicsum',
  initialState,
  reducers: {},
  extraReducers: {
    [getDataPicsum.pending]: (state, action) => {
      state.status = LOADING
    },
    [getDataPicsum.fulfilled]: (state, action) => {
      state.status = SUCCESS
      state.data = [...action.payload]
    },
    [getDataPicsum.rejected]: (state, action) => {
      state.status = FAILED
    },
  },
})

export default fetchPicsumSlice.reducer
