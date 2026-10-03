import './Header.scss'
import {ButtonM3 } from '@/shared/ui'
import { memo } from 'react';
import { debugUI } from '@/utils/debug'
import {HeaderSearch , HeaderDropDown, HeaderTitle, HeaderButtonAlarm} from '@/features'

import { useNavigation } from '@/app/lib/hooks/useNavigation'


function Header() {
    const navigation = useNavigation();

    return (
        <>
            <div className="Header_Conteiner">
                <ButtonM3
                    lable={null}
                    icon={'home'}
                    onClick={() => {
                        navigation.actions.goHome();
                        debugUI("Home")
                    }}
                    style={{
                        variant: 'borderless',
                        border: 'square',
                        isActive: true
                    }}
                    notifiBadgeInfo={null}
                    notifiBadgeType={null}
                />
                <ButtonM3
                    lable={null}
                    icon={'arrow_back_ios'}
                    onClick={() => {
                        navigation.actions.goBack();
                        debugUI("Back");
                    }}
                    style={{
                        variant: 'borderless',
                        border: 'square',
                        isActive: navigation.state.stateBackArrow
                    }}
                    notifiBadgeInfo={null}
                    notifiBadgeType={null}
                />
                <ButtonM3
                    lable={null}
                    icon={'arrow_forward_ios'}
                    onClick={() => {
                        navigation.actions.goForward();
                        debugUI("Forward");
                    }}
                    style={{
                        variant: 'borderless',
                        border: 'square',
                        isActive: navigation.state.stateForwardArrow
                    }}
                    notifiBadgeInfo={null}
                    notifiBadgeType={null}
                />
                <HeaderSearch/>
                <HeaderButtonAlarm></HeaderButtonAlarm>
                <>
                    <HeaderDropDown/>
                    <HeaderTitle></HeaderTitle>
                </>
            </div>
        </>
    );
}

export default memo(Header);