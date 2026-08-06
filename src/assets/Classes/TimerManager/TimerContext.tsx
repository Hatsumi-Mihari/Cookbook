import React, { createContext, useContext, useState, useEffect } from 'react';
import {TimerEngine} from './TimerMenager'

export const timerEngineApp = new TimerEngine();
timerEngineApp.start();

const TimerContext = createContext<TimerEngine>(timerEngineApp);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TimerContext.Provider value={timerEngineApp}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerManager = () => {
  return useContext(TimerContext);
};

export const useTimer = (timerId: number) => {
  const manager = useTimerManager();
  const [, setTick] = useState(0);

  useEffect(() => {
    const unsubscribe = manager.subscribe(() => {
      setTick((prev) => prev + 1); 
    });

    return () => unsubscribe();
  }, [manager]);

  return manager.getTimer(timerId);
};

export const useTimerPull = () => {
  const timerManager = useTimerManager();
  const [, setTick] = useState(0);
  useEffect(() => {
    const unsubscribe = timerManager.subscribe(() => {
      setTick((prev) => prev + 1); 
    });

    console.log(timerManager.getPull());

    return () => unsubscribe();
  }, [timerManager]);
  return timerManager.getPull();
};