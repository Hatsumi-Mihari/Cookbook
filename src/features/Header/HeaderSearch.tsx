import {ButtonM3} from '@/shared/ui'
import {useModalWindow} from '../../app/lib/hooks/useModalWindow'
import { memo, useCallback } from 'react'
import { debugUI } from '../../utils/debug';


function HeaderSearch() {
    const modal = useModalWindow();

    const handlerSeachModal = useCallback(() => {
        debugUI("Search");
        modal.builder(
            {
                children: <div></div>,
                label: '1234'
            }
        );
    }, []);


    return (
        <>
            <ButtonM3
                lable={null}
                icon={'search'}
                onClick={() => {
                    handlerSeachModal();
                }}
                style={{
                    variant: 'borderless',
                    border: 'square',
                    isActive: true
                }}
                notifiBadgeInfo={null}
                notifiBadgeType={null}
            />
        </>
    );
}

export default memo(HeaderSearch);