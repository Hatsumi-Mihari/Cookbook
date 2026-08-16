import './ModalSearch.scss';
import SearchIcon from '../../../icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg?react'
import {memo} from 'react'

function ModalSeachLine() {
    return ( 
    <div className='ModalSearchLine'>
        <div className="ModalSearchIcon">
            <SearchIcon></SearchIcon>
        </div>
        <input type="text" className='ModalSearchInput' placeholder='Search...'/>
    </div> 
    );
}

export default memo(ModalSeachLine);