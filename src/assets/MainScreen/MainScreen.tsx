import './MainScreen.scss'
import MainCard from "../Main_Card/Main_Card";
import { memo, useCallback } from 'react';
import { useAppSelector } from '../../store/Hooks/useAppHooks';

function MainScreen() {
    const content = useAppSelector((state) => state.AppState.content);

    return (
        <div className="MainScreen">
            <div className="MainScreenCradsConteiner">
                {content?.Main_Screen.map((item) => 
                    <MainCard key={Date.now() + item.id} imgSrc={item.img_src} title={item.title} onClick={() => alert(content.Categoris[item.id-1].lable)}></MainCard>
                )}
            </div>
        </div>
    );
}

export default memo(MainScreen);