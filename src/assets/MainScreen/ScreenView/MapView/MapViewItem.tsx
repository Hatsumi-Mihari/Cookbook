import './MapViewItem.scss'
import { type ListItem } from '../../../../store/types/Content'
import { useNavigation } from '../../../Classes/Navigation/NavigationProvider';

function MapViewItem(props: ListItem) {
    const navigation = useNavigation();

    return (<>
        <div className={props.mapId > -1 ? "MapViewItem linked" : "MapViewItem"} onClick={() => {
            console.log(props.mapId)
            if (props.mapId > 0) navigation.push(props.mapId)
        }}>
            <div className="MapViewItemIconConteiner">
                <div className="MapViewItemIcon">
                    <img src={props.img_src}></img>
                </div>
            </div>
            <div className="MapViewItemInfoConteiner">
                <div className="MapViewInfo">
                    <div className="MapViewInfoL1">{props.lable}</div>
                    <div className="MapViewInfoL2">
                        <div className="mapViewInfoConteiner">
                            {props.weight.map((i) => <p>{i}</p>)}
                            <p>{props.unit}</p>
                        </div>
                    </div>
                </div>
            </div>
            {props.mapId > -1 ?
                <div className="MapViewIconMore">
                    +
                </div>
                : <></>
            }
        </div>
    </>);
}

export default MapViewItem;