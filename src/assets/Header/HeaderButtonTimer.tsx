import AlarmIcon from '../icons/alarm_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import ButtonM3 from '../ButtonM3/ButtonM3';
import { useTimerManager, useTimer } from '../Classes/TimerManager/TimerContext';
import { openModalWindow } from '../../store/Slices/ModalSlice';
import { useDispatch } from 'react-redux';
import {memo} from 'react'

function HeaderButtonTimer() {
    const timerManager = useTimerManager();
    timerManager.setPinTimerDefult(0);
    const timer = useTimer(timerManager.getIdPinTimer());
    const dispatch = useDispatch();

    return <>
        <ButtonM3
            icons={<AlarmIcon />}
            lable={timerManager.formatTime(timer?.remainingS)}
            onClick={() => {
                dispatch(openModalWindow({
                    type: 'Timer',
                    props: {
                        title: 'Timer',
                        props: {}
                    }
                }));
            }}
            customClass='HeaderButtonOutline HeaderTimer'></ButtonM3>
    </>
}

export default memo(HeaderButtonTimer);