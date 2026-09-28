import './ViewPortLayout.scss'
import { LAZY_VIEWS } from '@/app/config/views/config'
import { LoaderSpiner } from '@/views'
import { memo, Suspense, createElement } from 'react'

function ViewPortLayout() {
 
    const activeView = 'map';

    return (
        <div className='ViewPortLayout'>
            <Suspense fallback={<LoaderSpiner/>}>
               {createElement(LAZY_VIEWS[activeView])}
            </Suspense>
        </div>
    );
}

export default memo(ViewPortLayout);