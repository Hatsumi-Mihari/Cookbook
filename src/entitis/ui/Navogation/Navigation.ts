export const LIM_HISTORY_SIZE: number = 10;

export interface NavActions {
    goBack: () => void;
    goForward: () => void;
    goHome: () => void;
    push: (value: number) => void;
}

export interface NavState{
    currentId: number;
    currentIdTop: number;
    stateForwardArrow: boolean;
    stateBackArrow: boolean;
    eventNavigation: boolean;
    history: number[];
}

export interface Navigation{
    actions: NavActions;
    state: NavState;
}