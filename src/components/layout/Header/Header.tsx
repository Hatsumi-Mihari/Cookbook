import './Header.scss'
import { memo } from 'react';
import ButtonM3 from '../../ui/button/ButtonM3'
import { debugUI } from '../../../utils/debug';



function Header() {;

    return (
        <>
            <div className="Header_Conteiner">
                <ButtonM3 
                    lable={null}
                    icon={'placeholder'}
                    onClick={() => {debugUI("Button M3 Click")}}
                    variant={'primary'}
                    type={'round'}
                />
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
            </div>
        </>
    );
}

export default memo(Header);