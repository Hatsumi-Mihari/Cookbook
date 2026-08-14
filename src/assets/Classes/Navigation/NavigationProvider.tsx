import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';
import NavigationQueue from './NavigationQueue';

interface NavigationCtxType {
    navigationQueue: React.RefObject<NavigationQueue>;
    stateForwardArrow: boolean;
    stateBackArrow: boolean;
    eventNavigation: boolean;
    goBack: () => void,
    goForward: () => void,
    goHome: () => void,
    push: (value: number) => void ,
    getCurrentId: () => number,
}

interface NavidationProviderProps {
    children: ReactNode
}


const NavigationCtx = createContext<NavigationCtxType | undefined>(undefined);
const navigation:NavigationQueue = new NavigationQueue();


export const NavigationProvider: React.FC<NavidationProviderProps> = ({ children }) => {
    const navigationQueue = useRef<NavigationQueue>(navigation);
    const [stateForwardArrow, setStateForwardArrow] = useState<boolean>(true);
    const [stateBackArrow, setStateBackArrow] = useState<boolean>(true);
    const [eventNavigation, trigerEventNavigation] = useState<boolean>(false);



    const goForward = () => {
        navigationQueue.current.goForward();
        trigerEventNavigation(!eventNavigation);
    }

    const goBack = () => {
        navigationQueue.current.goBack();
        trigerEventNavigation(!eventNavigation);
    }

    const goHome = () => {
        navigationQueue.current.goHome();
        console.log()
        trigerEventNavigation(!eventNavigation);
    }

    const push = (value: number) => {
        navigationQueue.current.push(value);
        trigerEventNavigation(!eventNavigation);
    }

    const getCurrentId = () => {
        return navigationQueue.current.getCurrentValue();
    }

    const value = {
        navigationQueue,
        stateForwardArrow,
        stateBackArrow,
        eventNavigation,
        goBack,
        goForward,
        goHome,
        push,
        getCurrentId
    };

    return (
        <NavigationCtx.Provider value={value}>
            {children}
        </NavigationCtx.Provider>
    );
}

export const useNavigation = () => {
    const ctx = useContext(NavigationCtx);
    if (!ctx) {
        throw new Error('useNavigation only use inside in NavigationProvider');
    }
    return ctx;
}


