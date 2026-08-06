import {memo, useCallback} from 'react';
import './ModalWindowTimerBTN.scss';
import ButtonM3Grup from '../../../ButtonM3/ButtonM3_grup';
import PlaceHolderIcon from '../../../icons/asterisk_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import PlayIcon from '../../../icons/play_arrow_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import PauseIcon from '../../../icons/pause_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import DeleteIcon from '../../../icons/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import type { TimerAction } from '../../../Classes/TimerManager/TimerMenager';

interface IModalWindowTimerBTN{
    CallbackPlayPause: () => void;
    CallbackDelete: () => void;
    Time: string;
    PlayPauseState: TimerAction;
}


function ModalWindowTimerButton(props: IModalWindowTimerBTN) {
    const callbackControl = useCallback(props.CallbackPlayPause, []);
    const callbackDelete = useCallback(props.CallbackDelete, []);

    return ( 
    <>
        <ButtonM3Grup options={[
            {
                lable: props.Time,
                onClick: callbackControl,
                icon: (props.PlayPauseState == 'PAUSE') ? <PauseIcon/> : <PlayIcon/>
            },
            {
                lable:null,
                onClick: callbackDelete,
                icon: <DeleteIcon/>
            },
        ]} customClass={props.PlayPauseState == 'PAUSE' ? 'ModalTimerBTN paused' : 'ModalTimerBTN'}/>
    </> 
    );
}

export default memo(ModalWindowTimerButton);