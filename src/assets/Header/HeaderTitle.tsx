import {memo, useEffect} from 'react';
import { useAppSelector } from '../../store/Hooks/useAppHooks';

function HeaderTitle() {
    const stateTitle = useAppSelector((state) => state.AppState.titlePage);

    return ( 
        <>
            <div className="HeaderLable">{stateTitle}</div>
        </>
     );
}

export default memo(HeaderTitle);