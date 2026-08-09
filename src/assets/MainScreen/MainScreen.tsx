import './MainScreen.scss'
import MainCard from "../Main_Card/Main_Card";
import { memo, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks/useAppHooks';
import { resetStateHome } from '../../store/Slices/AppSlice';

function MainScreen() {
    const content = useAppSelector((state) => state.AppState.content);
    const filterID = useAppSelector((state) => state.AppState.globalFilterID);
    const goHome = useAppSelector((state) => state.AppState.resetToHome);
    const readyLoad = useAppSelector((state) => state.AppState.readyLoad);
    const dispatch = useAppDispatch();
    const [page, updatePage] = useState(content?.Main_Screen);

    useEffect(() => {
        updatePage(content?.Main_Screen)
    }, [readyLoad]);

    useEffect(() => {
        updatePage(content?.Main_Screen)
        dispatch(resetStateHome());
    }, [goHome]);

    return (
        <div className="MainScreen">
            <div className="MainScreenCradsConteiner">
                {page?.map((item) =>{
                    const indludeFilterID = item.typeID.includes(filterID);

                    return (indludeFilterID ? <MainCard
                        key={Date.now() + item.id}
                        imgSrc={item.img_src}
                        title={item.title}
                        onClick={() => updatePage(content?.Categoris[item.index].data)}></MainCard> : <></>)
                }
                )}
            </div>
        </div>
    );
}

export default memo(MainScreen);