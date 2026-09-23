import './Card.scss'
import { memo, useCallback } from 'react'
import { debugUI } from '../../../utils/debug';

interface Card{
    id: number;
    label: string;
    imgURL: string;
    onClick: () => void;
}

function Card(props: Card) {
    const handlerCallback = useCallback(() => {
        debugUI("Card", `ID: ${props.id}, lable: ${props.label}, imgURL: ${props.imgURL}`)
        props.onClick();
    }, [])

    return (
        <div className="CardConteiner" onClick={() => {
            handlerCallback();
        }}>
            <div className="CardImg">
                <img src={props.imgURL} />
            </div>
            <div className="CardTitle">{props.label}</div>
        </div>
    );
}

export default memo(Card);