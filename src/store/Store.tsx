import { configureStore } from '@reduxjs/toolkit';
import ModalReducer from './Slices/ModalSlice';
import AppReducer from './Slices/AppSlice';

export const store = configureStore({
  reducer: {
    ModalState: ModalReducer, 
    AppState: AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;