import './FilterChiptM3.scss'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import iconsUrl from '../../../assets/icons/icons.svg'
import { useState, memo, useCallback, useRef } from 'react';

type DropDownMenuStyle = 'outline' | 'primary';

export interface IDropDownOptions {
    value: string;
    icon: string | null;
};

interface IDropDown {
    icon: string | null;
    valueDefault: string;
    style: DropDownMenuStyle;
    isActive: boolean;
    options: IDropDownOptions[];
    onChangeValue: (value: string) => void;
}

function FilterChiptM3(props: IDropDown) {
    const [idSelected, setIDSelected] = useState(0);
    const [isActive, setActive] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropDownRef, () => setActive(false));

    const handlerSelect = useCallback((id: number) => {
        setIDSelected(id); 
        props.onChangeValue(props.options[id].value);
    }, [props.options, props.onChangeValue]);


    return (
        <>
            <div>
                <div className={`${isActive ? "DropDown_Main Active" : "DropDown_Main"} ${props.style ?? ''} square ${props.isActive === false ? 'unclickable' : ''}`}

                    onClick={() => {
                        setActive(!isActive);
                    }} ref={dropDownRef}>
                    <div className="DropDown_Icon">
                        <svg>
                            <use href={`${iconsUrl}#placeholder`} />
                        </svg>
                    </div>
                    <div className="ButtoM3_lable">
                        {props.options[idSelected]?.value}
                    </div>
                    <div className="DropDown_Icon_arrow">
                        <svg>
                            <use href={`${iconsUrl}#arrow_drop_down`} />
                        </svg>
                    </div>
                </div>
                {isActive &&

                    <div className="DropDownList_Options">

                        {props.options.map((elem, index) => (
                            <div
                                className={idSelected === index ? "DropDownList_Option Selected" : "DropDownList_Option"}
                                key={`${elem.value}_${index}`}
                                onClick={() => handlerSelect(index)}>

                                <div className="DropDownList_Icon">
                                    <svg>
                                        <use href={idSelected === index ? `${iconsUrl}#check_small` : `${iconsUrl}#${props.options[idSelected].icon !== null ? props.options[idSelected] : ''}` } />
                                    </svg>
                                </div>

                                <div className="DropDownList_Lable">
                                    {elem.value}
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default memo(FilterChiptM3);