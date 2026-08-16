import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './Slices/AppSlice';

export const store = configureStore({
  reducer: {
    AppState: AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;