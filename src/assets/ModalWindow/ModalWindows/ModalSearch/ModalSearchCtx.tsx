import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ctxInput, ModalSerchInput } from './ModalSearchClass';
import { useAppSelector } from '../../../../store/Hooks/useAppHooks';
import Fuse from 'fuse.js'


const ModalInputCtx = createContext<ModalSerchInput>(ctxInput);

export const useInputCtx = () => {
    return useContext(ModalInputCtx)
};

export const useGetResultSearch = () => {
    const [value, setValue] = useState('');
    const IndexSearch = useAppSelector((state) => state.AppState.index_search);
    const [sizeOfIndexSearch,] = useState<number>(IndexSearch?.SearchIndex.length ?? 0);
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
        
        if (!value || !IndexSearch?.SearchIndex) return;

        const timerId = setTimeout(() => {

            const fuse = new Fuse(IndexSearch.SearchIndex, {keys: ['lable'], threshold: 0.4});
            const indexes: number[] = fuse.search(value).map(result => result.refIndex);

            console.log(indexes);
            
            updateLoadedData(indexes);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [value]);

    useEffect(() => {
        updateLoaded(true);
        console.log(ResultData);
    }, [ResultData]);


    return { inputEvent, isLoaded, ResultData };
}


