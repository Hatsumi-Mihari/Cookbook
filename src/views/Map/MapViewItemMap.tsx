import { useCallback } from 'react';
import './MapViewItemMap.scss'
import { debugUI } from '../../utils/debug';

type TypeTile = 1 | 2;

interface MapViewItemMap{
    indexStep: number;
    type: TypeTile;
    callback: ((text: string) => void) | null
    imgURL: string; 
}

function MapViewItemMap(props: MapViewItemMap) {

    const handlerModalInfo = useCallback(() => {
        debugUI("MapViewItemMap", "Onclick Event");
        if (props.callback !== null) props.callback.call;
    },[])

    return (
        <>
        
        <div className={props.type === 1 ? "MapViewItemMap" : "MapViewItemMap large"} onClick={handlerModalInfo}>
            <div className="MapViewItemMapIndex">{props.indexStep}</div>
            <div className="MapViewItemMapPicture">
                <img src={props.imgURL}/>
            </div>
        </div>
        </>
    );
}

export default MapViewItemMap;