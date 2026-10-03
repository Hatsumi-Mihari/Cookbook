import {ButtonM3} from '@/shared/ui'
import {useModalWindow} from '@/app/lib'
import { memo, useCallback } from 'react'
import { debugUI } from '@/utils/debug';
import {useAppStore} from '@/store'


function HeaderSearch() {
    const modal = useModalWindow();
    const store = useAppStore();
    const handlerSeachModal = useCallback(() => {
        debugUI("Search");
        modal.builder(
            {
                children: <div></div>,
                label: store.DropDownHeaderValue
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