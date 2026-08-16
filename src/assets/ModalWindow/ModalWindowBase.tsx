import './ModalWindowBase.scss'
import React, { useEffect, useState, memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonM3 from '../ButtonM3/ButtonM3';
import CloseIcon from '../icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react';
import { useModalWindowCtx } from './ModalWindowProvider';


function ModalWindowsBase() {
    const memoCloseIcon = useMemo(() => {
        return <CloseIcon />;
    }, []);
    const ModalCtx = useModalWindowCtx();

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
                        icons={memoCloseIcon}
                        onClick={() => { ModalCtx.closeModal() }}
                        customClass='ModalWindowBaseClose'
                    />
                </div>
                <div className="ModalWindowContent">
                    {ModalCtx.content.children}
                </div>
            </div>

        </>
    );
}

export default ModalWindowsBase;