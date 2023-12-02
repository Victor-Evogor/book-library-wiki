import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const createAppStore = () => configureStore({
  reducer: rootReducer
})

export default createAppStore
