import './ViewPortLayout.scss'
import DebugUIView from '../../../views/DebugUI/DebugUIView'
import CardsView from '../../../views/Cards/CardsView'
import MapView from '../../../views/Map/MapView'


function ViewPortLayout() {
    const type: string = 'debugUI'


    return ( 
    <div className='ViewPortLayout'>
       {type === 'debugUI' && <DebugUIView/>}
       {type === 'cards' && <CardsView/>}
       {type === 'map' && <MapView/>}
    </div> 
    );
}

export default ViewPortLayout;