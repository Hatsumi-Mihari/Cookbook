import './ModalSearch.scss'
import ModalSeachLine from './ModalSeacrhLine';
import { useGetResultSearch } from './ModalSearchCtx'
import { useRef } from 'react'
import LoadSpiner from '../../../Loader/LoadSpiner';

function ModalSearch() {
    const resultSearch = useGetResultSearch();

    return (
        <>
            {resultSearch.inputEvent === true ?
                <div className="ModalSearchList">

                    {
                        resultSearch.isLoaded ?
                            <>
                                <div className="ModalSearchListElem">
                                    <div className="ModalSearchListElemImg">
                                        <div></div>
                                    </div>
                                    <div className="ModalSearchListElemData">
                                        <p>{resultSearch.value}</p>
                                        <p>{resultSearch.isLoaded}</p>
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
                            </>
                            : <LoadSpiner></LoadSpiner>
                    }


                </div> : <></>
            }

        </>
    );
}

export default ModalSearch;