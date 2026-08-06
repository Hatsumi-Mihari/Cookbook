import { memo, useCallback } from 'react';
import './Main_Card.scss'

interface IUMainCard{
    title: string;
    onClick: () => void;
    imgSrc: string;
}

function MainCard(props: IUMainCard) {

    const handlerCallback = useCallback(() => {
        props.onClick();
    }, []);

    return (
        <>
            <div className="MainCardConteiner" onClick={() => handlerCallback()}>
                <div className="MainCardBackground">
                    <img src={props.imgSrc} title='img'></img>
                </div>
                <div className="MainCardTitle">
                    {props.title}
                </div>
            </div>
        </>
    );
}

export default memo(MainCard);