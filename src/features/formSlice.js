import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  form: {
    id: null,
    userId: 0,
    title: '',
    body: '',
  },
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm: (state) => {
      console.log('initialState', initialState)
      state.form = initialState.form
    },
  },
})

export const { changeInput, clearForm } = formSlice.actions

export default formSlice.reducer
