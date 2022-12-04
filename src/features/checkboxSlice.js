import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'value1', checked: false },
  { id: 2, name: 'value2', checked: false },
  { id: 3, name: 'value3', checked: false },
]

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    checked: (state, action) => {
      state = state.map((el) => {
        if (el.id === action.payload) {
          el.checked = !el.checked
        }
        return el
      })
    },
  },
})

export const { checked } = checkboxSlice.actions

export default checkboxSlice.reducer
