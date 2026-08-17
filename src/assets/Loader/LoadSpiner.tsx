import './Loader.scss'
import LoaderIcon from '../icons/progress_activity_64dp_E3E3E3_FILL0_wght600_GRAD0_opsz48.svg?react';


function LoadSpiner() {


    return (<>
        <div className="LoadSpiner">
            <div className="LoaderScreenProgressIcon">
                <LoaderIcon></LoaderIcon>
            </div>
        </div>

    </>);
}

export default LoadSpiner;