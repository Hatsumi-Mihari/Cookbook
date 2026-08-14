import { useAppSelector } from '../../../../store/Hooks/useAppHooks';
import type { Item } from '../../../../store/types/Content';
import './MapView.scss'
import MapViewItem from './MapViewItem';
import MapViewItemMap from './MapViewItemMap';

interface IMapView {
    index_map: number;
}


function MapView(props: IMapView) {
    const content = useAppSelector((state) => state.AppState.content?.items);
    const mapD: Item | undefined = content !== undefined
        ? content[props.index_map]
        : undefined;
    return (<>
        <div className="MapViewConteiner">
            <div className="MapViewList">
                <div className="MapViewListWrap">
                    {mapD?.content?.list.map((item) => {
                        return <MapViewItem
                            key={crypto.randomUUID()}
                            stepId={item.stepId}
                            mapId={item.mapId}
                            lable={item.lable}
                            weight={item.weight}
                            unit={item.unit}
                            img_src={item.img_src}
                        ></MapViewItem>
                    })}
                </div>
            </div>
            <div className="MapViewMap">
                <div className="MapViewMapWrap">
                    {mapD?.content?.map.map((item) => {
                        return <MapViewItemMap
                            stepID={item.stepID}
                            img_src={item.img_src}
                            modal_info={item.modal_info}
                            type={item.type}
                            key={crypto.randomUUID()}
                        />
                    })}
                </div>
            </div>
        </div>
    </>);
}

export default MapView;