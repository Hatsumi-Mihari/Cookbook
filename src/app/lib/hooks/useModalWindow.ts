import {useContext} from 'react'
import {ModalWindowBaseCtx} from '../../providers/ModalWindowProvider'

export const useModalWindow = () => {
    const ctx = useContext(ModalWindowBaseCtx);
    if (!ctx) {
        throw new Error('useModalWindowCtx only use inside in ModalWindowProvider');
    }
    return ctx;
}