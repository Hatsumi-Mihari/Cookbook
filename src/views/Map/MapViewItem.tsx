import './MapViewItem.scss'

interface MapViewItem{
    stepId: number;
    linked: boolean;
    imgURL: string;
    label: string;
    weight: number[];
    unit: string;
    callback: (() => void) | null;
}

function MapViewItem(props: MapViewItem) {




    return (<>
        <div className={props.linked ? "MapViewItem linked" : "MapViewItem"} onClick={() => {
            
            
        }}>
            <div className="MapViewItemIconConteiner">
                <div className="MapViewItemIcon">
                    <img src={props.imgURL}></img>
                </div>
            </div>
            <div className="MapViewItemInfoConteiner">
                <div className="MapViewInfo">
                    <div className="MapViewInfoL1">{props.label}</div>
                    <div className="MapViewInfoL2">
                        <div className="mapViewInfoConteiner">
                            {props.weight.map((i) => <p>{i}</p>)}
                            <p>{props.unit}</p>
                        </div>
                    </div>
                </div>
            </div>
            {props.linked ? 
                <div className="MapViewIconMore">
                    +
                </div>
                : <></>
            }
        </div>
    </>);
}

export default MapViewItem;