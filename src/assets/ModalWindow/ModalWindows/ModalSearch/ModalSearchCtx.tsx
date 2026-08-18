import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ctxInput, ModalSerchInput } from './ModalSearchClass';
import { useAppSelector } from '../../../../store/Hooks/useAppHooks';


const ModalInputCtx = createContext<ModalSerchInput>(ctxInput);

function containsSubstring(word: string, search: string, caseSensitive: boolean = true): boolean {

    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const flags = caseSensitive ? '' : 'i';
    const regex = new RegExp(escapedSearch, flags);

    return regex.test(word);
}


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
            let indexes: number[] = [];
            for (let i = 0; i < sizeOfIndexSearch; i++) {
                if (containsSubstring((IndexSearch.SearchIndex[i]?.lable ?? '').toLowerCase(), value.toLowerCase())) {
                    indexes.push(i);
                    console.log(i);
                }
            }
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


