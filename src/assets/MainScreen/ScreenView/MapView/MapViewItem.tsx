import './MapViewItem.scss'
import { type ListItem } from '../../../../store/types/Content'

function MapViewItem(props: ListItem) {
    return (<>
        <div className={props.mapId <= -1 ? "MapViewItem linked" : "MapViewItem"}>
            <div className="MapViewItemIconConteiner">
                <div className="MapViewItemIcon">
                    <img src={props.img_src}></img>
                </div>
            </div>
            <div className="MapViewItemInfoConteiner">
                <div className="MapViewInfo">
                    <div className="MapViewInfoL1">{props.lable}</div>
                    <div className="MapViewInfoL2">{props.weight}</div>
                </div>
            </div>
            {props.mapId <= -1 ?
                <div className="MapViewIconMore">
                    +
                </div>
                : <></>
            }
        </div>
    </>);
}

export default MapViewItem;