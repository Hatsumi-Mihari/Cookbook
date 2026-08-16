import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ModalSerchInput } from './ModalSearchClass';


const ctxInput = new ModalSerchInput();
const ModalInputCtx = createContext<ModalSerchInput>(ctxInput);


export const useModalInputCtx= () => {
    return useContext(ModalInputCtx)
};

export const useModalInputOnChange = () => {
    const [value] = useState<string>(ctxInput.getValue());
    const [evnt, tickEvent] = useState<boolean>(false);

    useEffect(() => {
        tickEvent(!evnt);
    }, []);

    return value;
}


