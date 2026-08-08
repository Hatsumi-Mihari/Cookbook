import './Header.scss'
import ButtonM3 from '../ButtonM3/ButtonM3';
import HeaderButtonTimer from './HeaderButtonTimer';
import PlaceHolderIcon from '../icons/asterisk_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import AlarmIcon from '../icons/alarm_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import {memo} from 'react';
import HeaderDropDownTitle from './HeaderDropDownTitle'


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