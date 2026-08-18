import './Screen.scss'
import { memo, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks/useAppHooks';
import MapView from './ScreenView/MapView/MapView';
import CardsView from './ScreenView/CardsView/CardsView';
import type { IndexTable, RootIndexTable } from '../../store/types/index_table';
import { useNavigation } from '../Classes/Navigation/NavigationProvider';

function MainScreen() {
    const defaultValueRender = "card";

    const [childId, updateChildIds] = useState([0]);
    const [mapIndex, setMapIndex] = useState(0);
    const [typeRender, updateTypeRender] = useState(defaultValueRender);
    const loaded = useAppSelector((state) => state.AppState.readyLoad);
    const content = useAppSelector((state) => state.AppState.content);
    const index = useAppSelector((state) => state.AppState.index_table);
    const tableLimsIDs = useAppSelector((state) => state.AppState.content?.idTable)
    const navidation = useNavigation();

    const limCategoryMax: number = tableLimsIDs !== undefined ? tableLimsIDs[0].max_lim : -1;
    const limMapIdMin: number = tableLimsIDs !== undefined ? tableLimsIDs[2].min_lim : -1;

    useEffect(() => {
        updateChildIds(content?.category[0].cardsId ?? [0]);
    }, [loaded]);

    useEffect(() => {
        const gotoIndex: IndexTable | undefined = index?.Index_table.find((item) => item.id === navidation.getCurrentId());
        if (
            navidation.getCurrentId() <= limCategoryMax &&
            limCategoryMax !== -1 &&
            gotoIndex?.index !== undefined
        ) {
            updateTypeRender(gotoIndex?.type ?? defaultValueRender);
            updateChildIds(content?.category[gotoIndex.index].cardsId ?? [0]);
            return; 
        }

        if (gotoIndex?.index !== undefined && content?.items[gotoIndex.index].childIds !== undefined) {
            
            const childID = content?.items[gotoIndex.index].childIds[0] ?? 0;
            if (childID >= limMapIdMin) {
                const indexL = index?.Index_table.find((item) => item.id === childID);
                updateTypeRender(indexL?.type ?? defaultValueRender);
                setMapIndex(indexL?.index ?? 0);
            } else {
                updateTypeRender(gotoIndex.type);
                updateChildIds(content?.items[gotoIndex.index].childIds as number[]);

            }
        }

        if (gotoIndex?.index !== undefined && content?.items[gotoIndex.index].id > limMapIdMin && content?.items[gotoIndex.index].childIds === undefined){
            
            updateTypeRender(gotoIndex?.type ?? defaultValueRender);
            setMapIndex(gotoIndex?.index ?? 0);
        }
    }, [navidation.eventNavigation]);


    return (
        <div className="Screen">
            <div className="ScreenConteiner">
                {typeRender === defaultValueRender ?
                    <CardsView idsRender={childId}></CardsView>
                    : <MapView index_map={mapIndex}></MapView>}
            </div>
        </div>
    );
}

export default memo(MainScreen);