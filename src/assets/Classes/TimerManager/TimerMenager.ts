export type TimerAction = 'PAUSE' | 'RUNING' | 'INF';

export type Timer = {
    id: number;
    durationS: number;
    remainingS: number;
    stateAction: TimerAction;
    statePrevAction: TimerAction;
}

export interface ITimer {
    duration: string;
    remaining?: string;
    stateAction: TimerAction;
}

export class TimerEngine {
    private isRunning = false;
    private idTimer: number = 0;
    private timeOutUpdateS: number = 1;
    private TimerPull: Map<number, Timer> = new Map<number, Timer>();
    private listeners = new Set<() => void>();

    public start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.loop();
    }

    public addTimer(timer: ITimer): void {
        const [m, s] = timer.duration.split(':').map(Number);
        const newTimer: Timer = {
            id: Date.now(),
            durationS: (m ?? 0) * 60 + (s ?? 0),
            remainingS: (m ?? 0) * 60 + (s ?? 0),
            stateAction: timer.stateAction,
            statePrevAction: timer.stateAction,
        }
        this.TimerPull.set(newTimer.id, newTimer);
        console.log(this.TimerPull);

    }

    public removeTimer(id: number): boolean {
        return this.TimerPull.delete(id);
    }

    public getPull(): Readonly<Map<number, Timer>> {
        return this.TimerPull;
    }

    public getTimer(id: number): Timer | undefined{
        return this.TimerPull.get(id)
    }

    public setToggle(id: number): undefined | boolean{
        if (!this.TimerPull.has(id)) return undefined;
        const timer = this.TimerPull.get(id);
        if (timer !== undefined){
            console.log(timer);
            if (timer.stateAction == 'RUNING' || timer.stateAction == 'INF'){
                timer.statePrevAction = timer.stateAction;
                timer.stateAction = 'PAUSE';
            }else if (timer.stateAction == 'PAUSE'){
                
                timer.stateAction = timer.statePrevAction;
                timer.statePrevAction = 'INF';
            }
        }
    }

    public subscribe(listener: () => void) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private notify() {
        this.listeners.forEach((listener) => listener());
    }

    public formatTime(totalSeconds: number | undefined): string {
        if (totalSeconds === undefined) return '-00:00';
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;

        const formattedMinutes = String(m).padStart(2, '0');
        const formattedSeconds = String(s).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    private loop() {
        if (!this.isRunning) return;
        this.tick();
        setTimeout(() => this.loop(), this.timeOutUpdateS * 1000);
    }

    private tick() {
        for (const [key, timer] of this.TimerPull) {
            if (timer.stateAction === 'RUNING' || timer.stateAction === 'INF') {
                timer.remainingS -= this.timeOutUpdateS;
            }

            if (timer.stateAction === 'RUNING' && timer.remainingS <= -1) {
                this.TimerPull.delete(key);
            }

            if (timer.stateAction === 'INF' && timer.remainingS <= -1) {
                timer.remainingS = timer.durationS;
            }
        }
        this.notify();
    }
}

