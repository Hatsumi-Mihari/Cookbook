import './Loader.scss'
import iconsUrl from '@/assets/icons/icons.svg';

function LoaderScreen() {

    return (<>

        <div className="LoaderScreen">
            <div className="LoaderScreenProgressIcon">
                <svg>
                    <use href={`${iconsUrl}#progress_activity_large`} />
                </svg>
            </div>
        </div>

    </>);
}

export default LoaderScreen;