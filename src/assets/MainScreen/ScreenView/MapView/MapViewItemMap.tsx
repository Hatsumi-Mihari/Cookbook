import './MapViewItemMap.scss'
import {type MapItem} from '../../../../store/types/Content'


function MapViewItemMap(props: MapItem) {
    return (
        <>
        
        <div className={props.type === 1 ? "MapViewItemMap" : "MapViewItemMap large"} onClick={() => {console.log(props.modal_info)}}>
            <div className="MapViewItemMapIndex">{props.stepID}</div>
            <div className="MapViewItemMapPicture">
                <img src={props.img_src}/>
            </div>
        </div>
        </>
    );
}

export default MapViewItemMap;