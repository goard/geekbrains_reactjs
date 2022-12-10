import { configureStore } from '@reduxjs/toolkit'
import fetchJsonPlaceholderReducer from '../features/fetchApiSlice'
import checkboxReducer from '../features/checkboxSlice'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import formReducer from '../features/formSlice'
import fetchPicsumReducer from '../features/fetchImagesApiSlice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form', 'images'],
  stateReconciler: autoMergeLevel2,
}

const reducers = combineReducers({
  fetchJP: fetchJsonPlaceholderReducer,
  checkbox: checkboxReducer,
  form: formReducer,
  images: fetchPicsumReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)
