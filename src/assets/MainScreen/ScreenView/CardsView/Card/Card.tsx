import './Card.scss'
import {type Item} from '../../../../../store/types/Content'
import {memo} from 'react'

function Card(props: Item) {
    return ( <>
        <div className="CardConteiner">
            <div className="CardImg">
                <img src={props.img_src} />
            </div>
            <div className="CardTitle">{props.lable}</div>
        </div>
    </> );
}

export default memo(Card);