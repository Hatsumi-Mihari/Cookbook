import  { createContext, useContext, useState, useEffect } from 'react';
import { ctxInput, ModalSerchInput } from './ModalSearchClass';



const ModalInputCtx = createContext<ModalSerchInput>(ctxInput);

export const useInputCtx = () => {
    return useContext(ModalInputCtx)
};

export const useGetResultSearch = () => {
    const [value, setValue] = useState('');
    const [inputEvent, updateStateInput] = useState(false)
    const [isLoaded, updateLoaded] = useState(false);
    const [ResultData, updateLoadedData] = useState<number[]>([])

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
        
    }, [value]);

    useEffect(() => {
        updateLoaded(true);
        console.log(ResultData);
    }, [ResultData]);


    return { inputEvent, isLoaded, ResultData };
}


