import './Header.scss'
import PlaceHolderIcon from '../icons/asterisk_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import AlarmIcon from '../icons/alarm_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import DropDownListM3 from '../DropDownListM3/DropDownListM3';
import ButtonM3 from '../ButtonM3/ButtonM3';
import { useTimerManager, useTimer } from '../Classes/TimerManager/TimerContext';

import { useState, memo, useEffect } from 'react'
import { openModalWindow } from '../ModalWindow/ModalSlice';

function HeaderDropDownTitle() {
    const [headerLable, setHeaderLable] = useState("");

    return <>
        <DropDownListM3
            options={[
                {
                    value: "Main",
                    lable: "Main",
                    icon: null
                },
                {
                    value: "2main",
                    lable: "2Main",
                    icon: null
                }
            ]}
            onChangeValue={setHeaderLable}
            valueDefault={'Main'}
        />
        <div className="HeaderLable">{headerLable}</div>
    </>
}

function HeaderButtonTimer() {
    const timerManager = useTimerManager();
    const timer = useTimer(0);
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

function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <div className="Header_Conteiner">
                <ButtonM3 icons={<PlaceHolderIcon />} lable={null} onClick={() => { console.log("Logo") }}></ButtonM3>
                <ButtonM3
                    icons={<PlaceHolderIcon />}
                    lable={null}
                    onClick={() => { console.log("Arrow Back") }}
                    customClass='HeaderButtonMove HeaderButton_NoneActive'></ButtonM3>

                <ButtonM3
                    icons={<PlaceHolderIcon />}
                    lable={null}
                    onClick={() => { console.log("Arrow Forward") }}
                    customClass='HeaderButtonMove HeaderButton_Active'></ButtonM3>

                <ButtonM3
                    icons={<PlaceHolderIcon />}
                    lable={null}
                    onClick={() => { console.log("Search Modal") }}
                    customClass='HeaderButtonOutline'></ButtonM3>

                <HeaderButtonTimer></HeaderButtonTimer>
                <HeaderDropDownTitle></HeaderDropDownTitle>
            </div>
        </>
    );
}

export default memo(Header);