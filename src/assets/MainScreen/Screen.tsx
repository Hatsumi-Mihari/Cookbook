import './Screen.scss'
import MainCard from "../Main_Card/Main_Card";
import { memo, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks/useAppHooks';
import { resetStateHome } from '../../store/Slices/AppSlice';
import MapView from './ScreenView/MapView/MapView';

function MainScreen() {


    return (
        <div className="Screen">
            <div className="ScreenConteiner">
                <MapView></MapView>
            </div>
        </div>
    );
}

export default memo(MainScreen);