import './MapView.scss'
import MapViewItem from './MapViewItem';
import MapViewItemMap from './MapViewItemMap';


function MapView() {
    return (<>
        <div className="MapViewConteiner">
            <div className="MapViewList">
                <div className="MapViewListWrap">
                    <MapViewItem
                        stepId={0}
                        mapId={-1}
                        lable='null'
                        weight={[0, 0]}
                        unit='gr'
                        img_src='./src/assets/icons/photo_48dp_434343_FILL0_wght400_GRAD0_opsz48.svg'
                    ></MapViewItem>
                    <MapViewItem
                        stepId={0}
                        mapId={0}
                        lable='null'
                        weight={[0, 0]}
                        unit='gr'
                        img_src='./src/assets/icons/photo_48dp_434343_FILL0_wght400_GRAD0_opsz48.svg'
                    ></MapViewItem>

                </div>
            </div>
            <div className="MapViewMap">
                <div className="MapViewMapWrap">
                    <MapViewItemMap
                        stepID={1}
                        img_src='./src/assets/icons/photo_48dp_434343_FILL0_wght400_GRAD0_opsz48.svg'
                        modal_info='test info'
                        type={1}
                    />
                    <MapViewItemMap
                        stepID={2}
                        img_src='./src/assets/icons/photo_48dp_434343_FILL0_wght400_GRAD0_opsz48.svg'
                        modal_info='test info'
                        type={2}
                    />
                </div>
            </div>
        </div>
    </>);
}

export default MapView;