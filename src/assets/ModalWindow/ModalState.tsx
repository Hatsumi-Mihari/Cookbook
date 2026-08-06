import { ReactNode } from 'react';
import ModalWindowTimer from "./ModalWindows/ModalTimer/ModalWindowTimer";

type ModalRenderFn<T extends Record<string, unknown> = Record<string, unknown>> = (
  props: T
) => React.ReactNode

export const TypesModal: Record<string, ModalRenderFn> = {
    'Timer': ModalWindowTimer,
}

export interface IModalState{
    isOpen: boolean;
    modalType: string | null; 
    modalProps?: Record<string, any>;
};