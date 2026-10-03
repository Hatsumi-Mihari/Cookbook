import './ModalSearch.scss';
import { memo, useRef, useState } from 'react'
import { useInputCtx } from './ModalSearchCtx';


function ModalSeachLine() {
    const [isEmpty, updateEmpty] = useState(true);
    const refInput = useRef<HTMLInputElement>(null);
    const ctxInp = useInputCtx();
    const heandlerOnChange = () => {
        ctxInp.setValue(refInput.current?.value ?? '');
        updateEmpty(refInput.current?.value !== '' ? false : true);
    }

    return (
        <>
            <div className={!isEmpty ? 'ModalSearchLine Active' : 'ModalSearchLine'}>
                <div className="ModalSearchIcon">
                    X
                </div>
                <input type="text" className='ModalSearchInput' placeholder='Search...' defaultValue="" onChange={heandlerOnChange} ref={refInput}></input>
            </div>
        </>
    );
}

export default memo(ModalSeachLine);