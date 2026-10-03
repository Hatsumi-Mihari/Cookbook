import { useDispatch, useSelector } from 'react-redux';
import { appActions } from './AppSlice'
import type { AppDispatch,RootState, AppState } from '@/store/Store';
import { debugStore } from '@/utils/debug';

export const useAppStore = () => {
    const dispatch = useDispatch<AppDispatch>();
    const appState = useSelector<RootState, AppState>((state) => state.AppStore);


    const setDropDownHeaderValue = (value: string) => {
        debugStore("wrap useAppStore", `value ${value}`, "setDropDownHeaderValue")
        dispatch(appActions.setDropDownHeaderValue(value));
    }

    return {
        ...appState,
        setDropDownHeaderValue,
    }
}
