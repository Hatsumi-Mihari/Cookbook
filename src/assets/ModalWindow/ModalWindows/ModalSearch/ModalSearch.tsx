import './ModalSearch.scss'
import ModalSeachLine from './ModalSeacrhLine';
import { useGetResultSearch } from './ModalSearchCtx'
import { useRef } from 'react'
import LoadSpiner from '../../../Loader/LoadSpiner';
import { useAppSelector } from '../../../../store/Hooks/useAppHooks';

function ModalSearch() {
    const resultSearch = useGetResultSearch();
    const IndexSearch = useAppSelector((state) => state.AppState.index_search);

    return (
        <>
            {resultSearch.inputEvent === true ?
                <div className="ModalSearchList">

                    {
                        resultSearch.isLoaded ?
                            <>
                                {resultSearch.ResultData.map((i) => {
                                    return (<div className="ModalSearchListElem" key={IndexSearch?.SearchIndex[i].id}>
                                        <div className="ModalSearchListElemImg">
                                            <div></div>
                                        </div>
                                        <div className="ModalSearchListElemData">
                                            <p>{IndexSearch?.SearchIndex[i].lable}</p>
                                            <p><b>Category: </b> {IndexSearch?.SearchIndex[i].category}</p>
                                            <p>123</p>
                                        </div>
                                    </div>)
                                })}
                            </>
                            : <LoadSpiner></LoadSpiner>
                    }


                </div> : <></>
            }

        </>
    );
}

export default ModalSearch;