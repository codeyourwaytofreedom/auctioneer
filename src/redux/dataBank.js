import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice';

export const bank = configureStore({
  reducer: {
    userSlice: userSlice,
  },
})

