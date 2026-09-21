import { useState, memo } from 'react';
import type { Icons_Index } from '../../../types/icons_index'
import iconsUrl from '../../../assets/icons/icons.svg'
import './ButtonM3.scss'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';
type ButtonType = 'square' | 'round';  

export interface ButtonM3 {
    lable: string | null,
    icon: Icons_Index | null,
    variant: ButtonVariant,
    type: ButtonType,
    onClick: () => void
};

function ButtonM3(props: ButtonM3) {
    return (
        <>
            <div className={`ButtonM3_base ${props.variant ?? ''} ${props.type ?? ''}`} onClick={() => props.onClick()}>
                {props.icon !== null ?
                    <svg>
                        <use href={`${iconsUrl}#${props.icon}`} />
                    </svg> : <></>
                }

                {props.lable !== null ?
                    <p className='ButtoM3_lable'>{props.lable}</p> : <></>
                }
            </div>
        </>
    );
}

export default ButtonM3;
