import AlarmIcon from '../icons/alarm_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import ButtonM3 from '../ButtonM3/ButtonM3';
import { useTimerManager, useTimer } from '../Classes/TimerManager/TimerContext';
import {memo} from 'react'
import { useModalWindowCtx } from '../ModalWindow/ModalWindowProvider';
import ModalWindowTimer from '../ModalWindow/ModalWindows/ModalTimer/ModalWindowTimer';

function HeaderButtonTimer() {
    const timerManager = useTimerManager();
    const modaleCtx = useModalWindowCtx();
    timerManager.setPinTimerDefult(0);
    const timer = useTimer(timerManager.getIdPinTimer());

    return <>
        <ButtonM3
            icons={<AlarmIcon />}
            lable={timerManager.formatTime(timer?.remainingS)}
            onClick={() => {
                modaleCtx.builder({label: <>Timer</>, children: <ModalWindowTimer></ModalWindowTimer>});
                modaleCtx.openModal();
            }}
            customClass='HeaderButtonOutline HeaderTimer'></ButtonM3>
    </>
}

export default memo(HeaderButtonTimer);