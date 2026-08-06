import './ButtonM3.scss';
import { ReactNode, memo } from 'react';

export interface IButtonM3{
    lable: string | null;
    onClick: () => void | number;
    icons: ReactNode | null;
    customClass?: string;
}

function ButtonM3(props: IButtonM3) {
    return ( <>
        <button className={props.customClass !== undefined ? "ButtonM3 " + props.customClass : "ButtonM3"} onClick={props.onClick}>
            {props.icons != null ? <div className="ButtonM3_Icon">{props.icons}</div> : <></>}
            {props.lable != null ?  <div className="ButtonM3_Lable">{props.lable}</div>: <></>}
            
        </button>
    </>);
}

export default memo(ButtonM3);
