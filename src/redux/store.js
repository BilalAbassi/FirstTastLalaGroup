import { configureStore } from '@reduxjs/toolkit'
import loginData from './feature/loginData'

export const store = configureStore({
  reducer: {
    user:loginData
  },
})