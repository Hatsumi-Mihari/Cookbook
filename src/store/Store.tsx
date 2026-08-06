import { configureStore } from '@reduxjs/toolkit';
import ModalReducer from '../assets/ModalWindow/ModalSlice'

export const store = configureStore({
  reducer: {
    ModalState: ModalReducer, 
  },
});