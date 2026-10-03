import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  type ReactNode,
  useCallback,
  type RefObject
} from 'react';
import {
  type DTOtimer,
  type DTItimer,
  type ITimerMeta,
  type ITimerRem
} from '@/entitis';
import { formatMsToTime, genNumericId, secondsToMs } from '@/shared/lib'
import { debugProvider } from '@/utils/debug';

interface TimerManagerContextType {
  timersRem: RefObject<Record<string, ITimerRem>>;
  timersMeta: RefObject<Record<string, ITimerMeta>>;
  countTimers: RefObject<number>;
  getCountTimers: () => number;
  stop: (id: number) => void;
  start: (id: number) => void;
  delete: (id: number) => void;
  add: (timer: DTItimer) => void;
  getTimer: (id: number) => DTOtimer;

  debug_getAllTimers: () => void;
}

const TimerManagerContext = createContext<TimerManagerContextType | undefined>(undefined);

export const TimerManagerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const timersRemRef = useRef<Record<number, ITimerRem>>({});
  const timersMetaRef = useRef<Record<number, ITimerMeta>>({});
  const countTimersRef = useRef<number>(0);

  const start = useCallback((id: number) => {
    const timer = timersRemRef.current[id];
    const meta = timersMetaRef.current[id];

    if (timer && meta) {
      timer.isActive = true;
      timer.createdAt = Date.now();
      meta.status = 'running';
      debugProvider("TimerManagerProvider", "started id:", id);
    } else {
      console.error(`Timer with id ${id} not found`);
    }
  }, []);

  const stop = useCallback((id: number) => {
    const timer = timersRemRef.current[id];
    const meta = timersMetaRef.current[id];

    if (timer && meta) {
      timer.isActive = false;
      timer.duration = timer.remainingTime;
      meta.status = 'paused';
      debugProvider("TimerManagerProvider", "stoped id:", id);
    } else {
      console.error(`Timer with id ${id} not found`);
    }
  }, []);

  const deleteTimer = useCallback((id: number) => {
    if (countTimersRef.current <= 0) {
      debugProvider("TimerManagerProvider", "delete error: Table is empty");
      return;
    }
    countTimersRef.current = -1;
    delete timersRemRef.current[id];
    delete timersMetaRef.current[id];
    debugProvider("TimerManagerProvider", "deleted id:", id);
  }, []);

  const add = useCallback((timer: DTItimer) => {
    countTimersRef.current += 1;
    const id: number = genNumericId();

    timersRemRef.current[id] = {
      duration: secondsToMs(timer.duration),
      remainingTime: secondsToMs(timer.duration),
      createdAt: Date.now(),
      isActive: true
    }

    timersMetaRef.current[id] = {
      id: id,
      time: formatMsToTime(secondsToMs(timer.duration)),
      name: timer.name,
      status: timer.status,
      ring: timer.ring
    }

    debugProvider("TimerManagerProvider add", timer, " id -> ", id);
  }, []);

  const getCountTimers = useCallback(() => { return countTimersRef.current }, []);

  const getTimer = useCallback((id: number) => {
    debugProvider("TimerManagerProvider", "getTimer");
    return {
      timer: timersRemRef.current[id],
      timerMeta: timersMetaRef.current[id]
    };
  }, []);

  const debug_getAllTimers = useCallback(() => {
    const meta = timersMetaRef.current;
    const rem = timersRemRef.current;

    if (!meta || !rem) return;

    Object.keys(meta).forEach((key) => {
      const id = Number(key);
      const tmr: DTOtimer = {
        timerMeta: meta[id],
        timer: rem[id]
      };
      debugProvider("Debug All Timers", tmr);
    });
  }, [])

  useEffect(() => {
    const meta = timersMetaRef.current;
    const rem = timersRemRef.current;

    if (!meta || !rem) return;

    const interval = setInterval(() => {
      Object.keys(rem).forEach((key) => {
        const id = Number(key);
        const timer = rem[id];
        if (rem[id].isActive) {
          timer.remainingTime = timer.duration - (Date.now() - timer.createdAt);
          meta[id].time = formatMsToTime(timer.remainingTime);

          if (timer.remainingTime === 0 && meta[id].status !== 'inf') {
            timer.isActive = false;
            meta[id].status = 'completed';
          }
        }
        debugProvider(`TimerManagerProvider Tick: ID -> ${id}`, rem[id], meta[id]);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (true) {
      (window as any).__TIMER_DEVTOOLS__ = {
        start: start,
        stop: stop,
        add: add,
        getCountTimers: getCountTimers,
        getTimer,
        getAllTimer: debug_getAllTimers,
        deleteTimer,
        dump: () => timersRemRef.current,
      };

      debugProvider("TimerManagerProvider", 'Timer DevTools exist in window.__TIMER_DEVTOOLS__');
    }

    return () => {
      delete (window as any).__TIMER_DEVTOOLS__;
    };
  }, [start, stop, add, getCountTimers, getTimer, debug_getAllTimers, deleteTimer]);


  return (
    <TimerManagerContext.Provider value={{
      timersRem: timersRemRef,
      timersMeta: timersMetaRef,
      countTimers: countTimersRef,
      start,
      stop,
      delete: deleteTimer,
      add,
      getCountTimers,
      getTimer,
      debug_getAllTimers
    }}>
      {children}
    </TimerManagerContext.Provider>
  );
};

export const useTimerManager = () => {
  const context = useContext(TimerManagerContext);
  if (!context) {
    throw new Error('useTimerManager must be used within a TimerManagerProvider');
  }
  return context;
};