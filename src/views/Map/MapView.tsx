
import { debugUI } from '../../utils/debug';
import './MapView.scss'
import MapViewItem from './MapViewItem';
import MapViewItemMap from './MapViewItemMap';



function MapView() {
    return (<>
        <div className="MapViewConteiner">
            <div className="MapViewList">
                <div className="MapViewListWrap">
                    {Array.from({ length: 4 }, (_, index) => (
                        <MapViewItem
                            key={index}
                            stepId={index}
                            linked={false}
                            label={'lorem'}
                            weight={[100]}
                            unit={'gr'}
                            imgURL={'null'}
                            callback={null}
                        ></MapViewItem>
                    ))}
                    {Array.from({ length: 4 }, (_, index) => (
                        <MapViewItem
                            key={index + 4}
                            stepId={index + 4}
                            linked={true}
                            label={'lorem'}
                            weight={[100,200]}
                            unit={'gr'}
                            imgURL={'null'}
                            callback={() => {
                                debugUI("MapView/MapViewItem", `ID: ${index + 4}, Linked: true`)
                            }}
                        ></MapViewItem>
                    ))}
                </div>
            </div>
            <div className="MapViewMap">
                <div className="MapViewMapWrap">
                    {Array.from({ length: 4 }, (_, index) => (
                        <MapViewItemMap
                            key={index + 8}
                            indexStep={index + 8}
                            type={1}
                            imgURL={'null'}
                            callback={() => {
                                debugUI("MapView/MapViewItemMap", `ID: ${index + 8}, Linked: true`)
                            }}
                        />
                    ))}
                    {Array.from({ length: 4 }, (_, index) => (
                        <MapViewItemMap
                            key={index + 12}
                            indexStep={index + 12}
                            type={2}
                            imgURL={'null'}
                            callback={() => {
                                debugUI("MapView/MapViewItemMap", `ID: ${index + 12}, Linked: true`)
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>);
}

export default MapView;