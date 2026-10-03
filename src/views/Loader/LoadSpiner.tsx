import './Loader.scss'
import iconsUrl from '@/assets/icons/icons.svg';


function LoadSpiner() {


    return (<>
        <div className="LoadSpiner">
            <div className="LoaderScreenProgressIcon">
                <svg>
                    <use href={`${iconsUrl}#progress_activity_large`} />
                </svg>
            </div>
        </div>

    </>);
}

export default LoadSpiner;