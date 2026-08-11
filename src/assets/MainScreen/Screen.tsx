import './Screen.scss'
import { memo, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks/useAppHooks';
import { resetStateHome } from '../../store/Slices/AppSlice';
import MapView from './ScreenView/MapView/MapView';
import CardsView from './ScreenView/CardsView/CardsView';

function MainScreen() {


    return (
        <div className="Screen">
            <div className="ScreenConteiner">
                <CardsView></CardsView>
            </div>
        </div>
    );
}

export default memo(MainScreen);