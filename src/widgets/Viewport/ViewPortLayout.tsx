import './ViewPortLayout.scss'
import { LoaderSpiner } from '@/views'
import { useAppStore } from '@/store'
import { memo, Suspense, createElement } from 'react'
import { debugUI } from '@/utils/debug';
import { type Views, LAZY_VIEWS } from '@/app/config'

function ViewPortLayout() {
    
    const AppDispatch = useAppStore();
    const targetView: Views  = AppDispatch.ViewState !== undefined ? AppDispatch.ViewState : 'cards';
    
    debugUI("ViewPortLayout", AppDispatch.ViewState, " target view -> " , targetView);

    return (
        <div className='ViewPortLayout'>
            <Suspense fallback={<LoaderSpiner/>}>
               {createElement(LAZY_VIEWS[targetView])}
            </Suspense>
        </div>
    );
}

export default memo(ViewPortLayout);