import './Card.scss'
import { type Item } from '../../../../../store/types/Content'
import { memo, useCallback } from 'react'
import { useNavigation } from '../../../../Classes/Navigation/NavigationProvider'

interface CardItem {
    item: Item
}

function Card(props: CardItem) {
    const navigation = useNavigation();

    return (
        <div className="CardConteiner" onClick={() => {
            if (props.item.childIds !== undefined) {
                navigation.push(props.item.id)
            };
        }}>
            <div className="CardImg">
                <img src={props.item.img_src} />
            </div>
            <div className="CardTitle">{props.item.lable} {props.item.id}</div>
        </div>
    );
}

export default memo(Card);