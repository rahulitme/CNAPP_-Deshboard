import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/dashboard/dashboardSlice.js'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
})
