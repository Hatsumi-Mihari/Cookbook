import { useState, type ReactNode, memo, useEffect, useRef } from 'react';
import ModalWindowTimerButton from './ModalWindowTimerBTN';
import TimeInput from '../../../Inputs/TimeInput/TimeInput';
import ButtonM3 from '../../../ButtonM3/ButtonM3';
import ButtonM3_grup from '../../../ButtonM3/ButtonM3_grup';
import PlacehodelIcon from '../../../icons/asterisk_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import './ModalWindowTimer.scss'
import { useTimerManager, useTimer, useTimerPull } from '../../../Classes/TimerManager/TimerContext';
import type { TimerEngine, Timer } from '../../../Classes/TimerManager/TimerMenager';

interface IModalTimer {

}

function ModalWindowTimer(props: IModalTimer) {
    const timerManager = useTimerManager();
    const timerPull = useTimerPull();
    const [min, sec] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];


    return (
        <>
            <div className='ModalWindowTimerConteiner'>
                <div className="ModalWindowTimerList">

                    {Array.from(timerPull.values()).map((timer) => (
                        <ModalWindowTimerButton
                            key={timer.id}
                            CallbackPlayPause={() => { timerManager.setToggle(timer.id); console.log(timer.id); console.log(timerPull) }}
                            CallbackDelete={() => { timerManager.removeTimer(timer.id) }}
                            Time={timerManager.formatTime(timer.remainingS)}
                            PlayPauseState={timer.stateAction} />

                    ))}
                </div>

                <div className="ModalWindowTimerControlPanel">
                    <div className="ModalWindowTimerLable">New Timer</div>
                    <div className="ModalWindowTimerInput">
                        <TimeInput refInputMin={min} refInputSec={sec} ></TimeInput>
                    </div>
                    <div className="ModalWindowTimerContolBTN">
                        <ButtonM3
                            icons={<PlacehodelIcon></PlacehodelIcon>}
                            lable={'Add Timer'}
                            onClick={() => {
                                console.log(min.current?.value, sec.current?.value);
                                timerManager.addTimer({
                                    duration: min.current?.value + ':' + sec.current?.value,
                                    stateAction: 'RUNING'
                                })
                            }}
                            customClass=' ModalBtnAdd'></ButtonM3>
                        <ButtonM3_grup
                            options={[
                                {
                                    lable: '1 Min',
                                    onClick: () => {
                                        timerManager.addTimer({
                                            duration: '01:00',
                                            stateAction: 'RUNING'
                                        })
                                    },
                                    icon: <PlacehodelIcon></PlacehodelIcon>
                                },
                                {
                                    lable: '10 Min',
                                    onClick: () => {
                                        timerManager.addTimer({
                                            duration: '10:00',
                                            stateAction: 'RUNING'
                                        })
                                    },
                                    icon: <PlacehodelIcon></PlacehodelIcon>
                                },
                                {
                                    lable: '30 Min',
                                    onClick: () => {
                                        timerManager.addTimer({
                                            duration: '30:00',
                                            stateAction: 'RUNING'
                                        })
                                    },
                                    icon: <PlacehodelIcon></PlacehodelIcon>
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalWindowTimer;