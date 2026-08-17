import './ModalSearch.scss';
import SearchIcon from '../../../icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg?react'
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
                    <SearchIcon></SearchIcon>
                </div>
                <input type="text" className='ModalSearchInput' placeholder='Search...' defaultValue="" onChange={heandlerOnChange} ref={refInput}></input>
            </div>
        </>
    );
}

export default memo(ModalSeachLine);