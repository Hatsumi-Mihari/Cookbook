import './MainScreen.scss'
import MainCard from "../Main_Card/Main_Card";
import { memo, useCallback } from 'react';

function MainScreen() {
    return (
        <div className="MainScreen">
            <div className="MainScreenCradsConteiner">
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
                <MainCard imgSrc='none' title='Test titile' onClick={() => alert('onClick')}></MainCard>
            </div>
        </div>
    );
}

export default memo(MainScreen);