import { configureStore } from '@reduxjs/toolkit'
import fetchJsonPlaceholderReducer from '../features/fetchApiSlice'
import checkboxReducer from '../features/checkboxSlice'

export const store = configureStore({
  reducer: {
    fetchJP: fetchJsonPlaceholderReducer,
    checkbox: checkboxReducer,
  },
})
