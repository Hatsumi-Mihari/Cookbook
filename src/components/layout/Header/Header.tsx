import './Header.scss'
import ButtonM3 from '../../ui/button/ButtonM3'
import DropDowntM3 from '../../ui/dropdown/DropDownM3'
import TextFild from '../../ui/textfild/TextFild'
import { memo, useCallback, useState } from 'react';
import { debugUI } from '../../../utils/debug'
import { useNavigation } from '../../../app/lib/hooks/useNavigation'


function Header() {
    const [dropdownValue, setDropDownValue] = useState("");
    const handlerSetValue = useCallback((val: string) => {
        setDropDownValue(val);
    }, [])
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
                <ButtonM3
                    lable={null}
                    icon={'search'}
                    onClick={() => {
                        debugUI("Search");
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
                    lable={'00:00'}
                    icon={'alarm'}
                    onClick={() => { 
                        debugUI("Alarm");
                    }}
                    style={{
                        variant: 'outline',
                        border: 'square',
                        isActive: true
                    }}
                    notifiBadgeInfo={null}
                    notifiBadgeType={null}
                />
                <>
                    <DropDowntM3
                        icon={'placeholder'}
                        valueDefault={'Marcy'}
                        style={'outline'}
                        isActive={true}
                        options={[
                            {
                                value: 'Marcy',
                                icon: null
                            },
                            {
                                value: 'Anny',
                                icon: null
                            },
                            {
                                value: 'Sasha',
                                icon: null
                            },
                            {
                                value: 'Luz',
                                icon: null
                            },
                        ]}
                        onChangeValue={(value: string) => {
                            debugUI("Onchange value -> " + value);
                            handlerSetValue(value);
                        }}
                    />
                    <TextFild
                        text={dropdownValue}
                        classname={'Header_Lable'}
                    />
                </>
            </div>
        </>
    );
}

export default memo(Header);