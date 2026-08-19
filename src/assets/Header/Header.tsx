import './Header.scss'
import ButtonM3 from '../ButtonM3/ButtonM3';
import HeaderButtonTimer from './HeaderButtonTimer';
import PlaceHolderIcon from '../icons/asterisk_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import AlarmIcon from '../icons/alarm_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import HomeIcon from '../icons/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import ArrowBack from '../icons/arrow_back_ios_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import ArrowForward from '../icons/arrow_forward_ios_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import SearchIcon from '../icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg?react';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import HeaderDropDownTitle from './HeaderDropDownTitle'
import { useNavigation } from '../Classes/Navigation/NavigationProvider';
import { useModalWindowCtx } from '../ModalWindow/ModalWindowProvider';
import ModalSearch from '../ModalWindow/ModalWindows/ModalSearch/ModalSearch';
import ModalSeachLine from '../ModalWindow/ModalWindows/ModalSearch/ModalSeacrhLine';
import HeaderTitle from './HeaderTitle';


function Header() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const modalCtx = useModalWindowCtx();

    return (
        <>
            <div className="Header_Conteiner">
                <ButtonM3 icons={<HomeIcon />} lable={null} onClick={() => { navigation.goHome() }}></ButtonM3>


                <ButtonM3
                    icons={<ArrowBack />}
                    lable={null}
                    onClick={() => { console.log("Arrow Back"); navigation.goBack() }}
                    customClass={
                        navigation.stateBackArrow ?
                            'HeaderButtonMove HeaderButton_Active' :
                            'HeaderButtonMove HeaderButton_NoneActive'
                    }></ButtonM3>

                <ButtonM3
                    icons={<ArrowForward />}
                    lable={null}
                    onClick={() => { console.log("Arrow Forward"); navigation.goForward(); }}
                    customClass={
                        navigation.stateForwardArrow ?
                            'HeaderButtonMove HeaderButton_Active' :
                            'HeaderButtonMove HeaderButton_NoneActive'
                    }></ButtonM3>


                <ButtonM3
                    icons={<SearchIcon />}
                    lable={null}
                    onClick={() => {
                        console.log("Search Modal");
                        modalCtx.builder({ label: <ModalSeachLine></ModalSeachLine>, children: <ModalSearch></ModalSearch>, class: "ModalSearchConteiner"});
                       
                    }}
                    customClass='HeaderButtonOutline'></ButtonM3>

                <HeaderButtonTimer></HeaderButtonTimer>
                <HeaderDropDownTitle></HeaderDropDownTitle>
                <HeaderTitle></HeaderTitle>
            </div>
        </>
    );
}

export default memo(Header);