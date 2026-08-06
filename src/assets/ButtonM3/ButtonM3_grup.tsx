import { useState, memo } from 'react';
import './ButtonM3_grup.scss'

export interface IButtonM3Option {
    lable: string | null;
    onClick: (() => void | number) | null;
    icon?: ReactNode;
}

interface IButtonM3Grup {
    options: IButtonM3Option[];
    customClass?: string | undefined;
}

function ButtonM3Grup(props: IButtonM3Grup) {
    
    return (
        <>
            <div className={props.customClass !== undefined ? "ButtonM3_Grup_Conteiner " + props.customClass : "ButtonM3_Grup_Conteiner"}>
                {props.options.map((elem, index) => (
                    <button 
                    className={elem.onClick !== null ? "ButtonM3_Grup_Button" : "ButtonM3_Grup_Button unclickable"}
                    key={index} 
                    onClick={elem.onClick !== null ? elem.onClick : () => {}}>
                        {elem.icon !== null ? 
                        <div className="ButtonM3_Grup_Icon">{elem.icon}</div> 
                        : <></>}
                        {elem.lable !== null ? 
                        <div className="ButtonM3_Grup_Lable">{elem.lable}</div> 
                        : <></>}
                    </button>
                ))}
            </div>
        </>
    );
}

export default memo(ButtonM3Grup);