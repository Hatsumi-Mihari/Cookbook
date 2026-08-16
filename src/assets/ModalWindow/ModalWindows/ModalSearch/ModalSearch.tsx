import './ModalSearch.scss'
import ModalSeachLine from './ModalSeacrhLine';
import { useModalInputCtx } from './ModalSearchCtx'
import { useRef } from 'react'

function ModalSearch() {
    const ctxInput = useModalInputCtx();

    return (
        <>
            <div className="ModalSearchList">
                <div className="ModalSearchListElem">
                    <div className="ModalSearchListElemImg">
                        <div></div>
                    </div>
                    <div className="ModalSearchListElemData">
                        <p>{ctxInput.getValue()}</p>
                        <p>123</p>
                        <p>123</p>
                    </div>
                </div>
                <div className="ModalSearchListElem">
                    <div className="ModalSearchListElemImg">
                        <div></div>
                    </div>
                    <div className="ModalSearchListElemData">
                        <p>Title</p>
                        <p>123</p>
                        <p>123</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalSearch;