import React, { createContext, useState, ReactNode, useMemo, useCallback, useEffect } from 'react';
import { debugProvider } from '../../utils/debug';
import  {type Navigation, LIM_HISTORY_SIZE} from '../../entitis/ui/Navogation/Navigation'


interface NavidationProviderProps {
    children: ReactNode
}


export const NavigationCtx = createContext<Navigation | undefined>(undefined);

export const NavigationProvider: React.FC<NavidationProviderProps> = ({ children }) => {
    const [correntId, setCorrentId] = useState<number>(0);
    const [correntIdTop, setCorrentIdTop] = useState<number>(0);
    const [history, updateHistory] = useState<number[]>([0])
    const [stateForwardArrow, setStateForwardArrow] = useState<boolean>(true);
    const [stateBackArrow, setStateBackArrow] = useState<boolean>(true);
    const [eventNavigation, trigerEventNavigation] = useState<boolean>(false);

    useEffect(() => {
        setStateBackArrow(false);
        setStateForwardArrow(false);
    }, [])

    const goForward = useCallback(() => {
        debugProvider("Navigation","goForward");
        setCorrentId(prev => prev++);
        trigerEventNavigation((prev) => !prev);
    }, []);

    const goBack = useCallback(() => {
        debugProvider("Navigation","goBack");
        setCorrentId(prev => prev++);
        trigerEventNavigation((prev) => !prev);
    }, [])


    const goHome = useCallback(() => {
        debugProvider("Navigation goHome");
        trigerEventNavigation((prev) => !prev);
    }, []);

    const push = useCallback((value: number) => {
        if (history.length > LIM_HISTORY_SIZE){
            debugProvider("Navigation push", `history push is full, lim: ${LIM_HISTORY_SIZE}`);
            setCorrentIdTop(correntId);
            setCorrentId(0);
        }else{
            updateHistory(prev => [...prev, value]);
        }

        if (value === history[correntId-1]){
            debugProvider("Navigation push", `value: ${value} is exisit in history`);
            return;
        }

        debugProvider("Navigation", "push");
    }, []);

    const value = useMemo(() => ({
        actions: {
            goBack,
            goForward,
            goHome,
            push
        },
        state: {
            correntId,
            correntIdTop,
            stateForwardArrow,
            stateBackArrow,
            eventNavigation,
            history
        }

    }), [stateForwardArrow, stateBackArrow, eventNavigation, goBack, goForward, goHome, push]);

    return (
        <NavigationCtx.Provider value={value}>
            {children}
        </NavigationCtx.Provider>
    );
}

