import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ReactNode } from 'react';
import type { IModalState, ModalType } from './ModalState';

const initialModalState: IModalState = {
    isOpen: false,
    modalType: null,
    modalProps: undefined
};

export const sliceModal = createSlice({
    name: 'modalState',
    initialState: initialModalState,
    reducers: {
        openModalWindow: (
            state,
            action: PayloadAction<{ type: ModalType; props?: Record<string, any> }>
        ) => {
            state.isOpen = true;
            state.modalType = action.payload.type;
            state.modalProps = action.payload.props;
        },

        closeModalWindow: (state) => {
            state.isOpen = false;
            state.modalType = null;
            state.modalProps = undefined;
        }
    },
});

export const { openModalWindow, closeModalWindow } = sliceModal.actions;
export default sliceModal.reducer;