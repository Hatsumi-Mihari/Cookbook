
export type TimerStatus = 'idle' | 'running' | 'paused' | 'completed' | 'inf';

export interface ITimerRem {
  duration: number;
  remainingTime: number;
  createdAt: number;
  isActive: boolean;
}

export interface ITimerMeta {
  id: number;
  time: string;
  name: string;
  status?: TimerStatus;
  ring: string | null;
}

export interface DTOtimer {
  timer: ITimerRem;
  timerMeta: ITimerMeta;
}

export interface DTItimer {
  duration: number;
  name: string;
  status?: TimerStatus;
  ring: string | null;
}