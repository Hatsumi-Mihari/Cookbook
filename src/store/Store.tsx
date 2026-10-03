import { configureStore } from '@reduxjs/toolkit';
import {
  appSlice
} from '@/store/Slices'

export const store = configureStore({
  reducer: {
    AppStore: appSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppState = ReturnType<typeof appSlice.reducer>
export type AppDispatch = typeof store.dispatch;