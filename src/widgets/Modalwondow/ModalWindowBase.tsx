import './ModalWindowBase.scss'
import { memo, useCallback } from 'react';
import{ ButtonM3 } from '@/shared/ui';
import { useModalWindow } from '@/app/lib/hooks/useModalWindow';
import { debugUI } from '@/utils/debug';


function ModalWindowBase() {
    const ModalCtx = useModalWindow();

    const handlerCallbackClose = useCallback(() => {
        debugUI("ModalWindowsBase", "Event close")
        ModalCtx.closeModal();
    }, [])

    return (
        <>
            <div className="ModalWindowCloseCollision" onClick={() => { ModalCtx.closeModal() }}></div>
            <div className={"ModalWindowBase " + ModalCtx.content.class}>
                <div className="ModalWindowBaseControl">
                    <div className="ModalWindowBaseLable">
                        {ModalCtx.content.label}
                    </div>
                    <ButtonM3
                        lable={null}
                        icon={'close'}
                        style={{
                            border: 'round',
                            variant: 'borderless',
                            isActive: true,
                        }}
                        notifiBadgeInfo={null}
                        notifiBadgeType={null}
                        onClick={handlerCallbackClose}
                    />
                </div>
                <div className="ModalWindowContent">
                    {ModalCtx.content.children}
                </div>
            </div>

        </>
    );
}

export default memo(ModalWindowBase);