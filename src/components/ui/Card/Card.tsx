import './Card.scss'
import { memo } from 'react'


function Card() {


    return (
        <div className="CardConteiner" onClick={() => {

        }}>
            <div className="CardImg">
                <img src={''} />
            </div>
            <div className="CardTitle">{1243}</div>
        </div>
    );
}

export default memo(Card);