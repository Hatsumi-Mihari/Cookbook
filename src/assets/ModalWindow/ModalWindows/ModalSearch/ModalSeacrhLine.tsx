import './ModalSearch.scss';
import SearchIcon from '../../../icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg?react'
import {memo, useRef} from 'react'
import { useModalInputCtx, useModalInputOnChange } from './ModalSearchCtx';


function ModalSeachLine() {
    const refInput = useRef<HTMLInputElement>(null);
    const ctxInp = useModalInputCtx();
    const heandlerOnChange = () => {
        ctxInp.setValue(refInput.current?.value ?? '');
        console.log(useModalInputOnChange());
    }

    return ( 
    <div className='ModalSearchLine'>
        <div className="ModalSearchIcon">
            <SearchIcon></SearchIcon>
        </div>
        <input type="text" className='ModalSearchInput' placeholder='Search...' defaultValue="" onChange={heandlerOnChange} ref={refInput}></input>
    </div> 
    );
}

export default memo(ModalSeachLine);