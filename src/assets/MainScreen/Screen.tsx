import './Screen.scss'
import { memo, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks/useAppHooks';
import { resetStateHome } from '../../store/Slices/AppSlice';
import MapView from './ScreenView/MapView/MapView';
import CardsView from './ScreenView/CardsView/CardsView';
import type { IndexTable, RootIndexTable } from '../../store/types/index_table';
import { useNavigation } from '../Classes/Navigation/NavigationProvider';

function MainScreen() {
    const [childId, updateChildIds] = useState([0]);
    const [lastIndexItem, setlastIndexItem] = useState(0);
    const [typeRender, updateTypeRender] = useState("");
    const loaded = useAppSelector((state) => state.AppState.readyLoad);
    const content = useAppSelector((state) => state.AppState.content);
    const index = useAppSelector((state) => state.AppState.index_table);
    const navidation = useNavigation();

    useEffect(() => {
        updateChildIds(content?.category.cardsId ? content?.category.cardsId : []);
    }, [loaded]);

    useEffect(() => {
        const renderItem: IndexTable | undefined = index?.Index_table.find((item) => item.id == childId[0]);
        if (renderItem !== undefined) {
            updateTypeRender(renderItem.type );
            setlastIndexItem(renderItem.index);
        }

        console.log(renderItem, childId);
    }, [childId]);

    useEffect(() => {
        const gotoIndex = index?.Index_table.find((item) => item.id === navidation.getCurrentId());
        if (gotoIndex?.index !== undefined) {
            updateChildIds(content?.items[gotoIndex?.index].childIds);
        }
    }, [navidation.eventNavigation]);


    return (
        <div className="Screen">
            <div className="ScreenConteiner">
                {typeRender === "card" ?
                    <CardsView callbackUpdateRedner={updateChildIds} idsRender={childId}></CardsView>
                    : <MapView index_map={lastIndexItem}></MapView>}
            </div>
        </div>
    );
}

export default memo(MainScreen);