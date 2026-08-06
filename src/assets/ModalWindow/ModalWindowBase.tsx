import './ModalWindowBase.scss'
import { useEffect, useState, memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow } from './ModalSlice'
import { TypesModal } from './ModalState'
import ButtonM3 from '../ButtonM3/ButtonM3';
import CloseIcon from '../icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react'


function ModalWindowsBase() {
    const memoCloseIcon = useMemo(() => {
        return <CloseIcon />;
    }, []);
    const dispatch = useDispatch();
    const stateModal = useSelector((state) => state.ModalState);
    useEffect(() => {
        console.log(stateModal);
    },[])
    return (
        <>
            <div className="ModalWindowCloseCollision"  onClick={() => {dispatch(closeModalWindow())}}></div>
            <div className="ModalWindowBase">
                <div className="ModalWindowBaseControl">
                    <div className="ModalWindowBaseLable">
                        {stateModal.modalProps?.title || "null"}
                    </div>
                    <ButtonM3
                        lable={null}
                        icons={memoCloseIcon}
                        onClick={() => {dispatch(closeModalWindow())}}
                        customClass='ModalWindowBaseClose' 
                        />
                </div>
                <div className="ModalWindowContent">
                    {TypesModal[stateModal.modalType](stateModal.modalProps?.props)}
                </div>
            </div>

        </>
    );ц
}

export default ModalWindowsBase;