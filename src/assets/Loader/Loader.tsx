import './Loader.scss'
import LoaderIcon from '../icons/progress_activity_64dp_E3E3E3_FILL0_wght600_GRAD0_opsz48.svg?react';
import { useAppSelector } from '../../store/Hooks/useAppHooks';
import { useEffectEvent } from 'react';

function LoaderScreen() {
    const dispatch = useAppSelector((state) => state.AppState);

    return (<>
        {!dispatch.readyLoad ?
            <div className="LoaderScreen">
                <div className="LoaderScreenProgressIcon">
                    <LoaderIcon></LoaderIcon>
                </div>
            </div> : <></>
        }
    </>);
}

export default LoaderScreen;