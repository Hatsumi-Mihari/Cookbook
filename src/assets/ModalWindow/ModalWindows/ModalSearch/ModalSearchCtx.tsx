import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ctxInput, ModalSerchInput } from './ModalSearchClass';


const ModalInputCtx = createContext<ModalSerchInput>(ctxInput);


export const useInputCtx = () => {
    return useContext(ModalInputCtx)
};

export const useGetResultSearch = () => {
    const [value, setValue] = useState('');
    const [inputEvent, updateStateInput] = useState(false)
    const [isLoaded, updateLoaded] = useState(false);
    const [loadedData, updateLoadedData] = useState<number[]>([])

    useEffect(() => {
        const unsubscribe = ctxInput.subscribe((val) => {
            setValue(val);
            updateLoaded(false);
            if (val === '') updateStateInput(false);
            else updateStateInput(true);
        });

        return () => unsubscribe();
    }, [])

    useEffect(() => {
        const fetchFakeData = async () => {

            // Имитируем задержку через Promise + setTimeout
            await new Promise((resolve) => setTimeout(resolve, 2000));
            updateLoadedData([0]);
            console.log([`promise long load: ${value}`]);
            
        };

        fetchFakeData();

    }, [inputEvent]);

    useEffect(() => {
        console.log(loadedData);
        updateLoaded(true);
    }, [loadedData]);


    return { value, inputEvent, isLoaded };
}


