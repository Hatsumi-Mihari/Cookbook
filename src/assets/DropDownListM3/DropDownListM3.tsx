import './DropDownListM3.scss'
import { useEffect, useState, memo, useCallback, useMemo, useRef } from 'react';
import useOnClickOutside from '../Hooks/useOnClickOutside'
import PlaceHolderIcon from '../icons/asterisk_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react'
import ArrowStateOpen from '../icons/arrow_drop_down_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react'
import SelectedIcon from '../icons/check_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react'

export interface IDropDownListOptions {
    lable: string;
    value: string;
    icon?: ReactNode;
};

interface IDropDownList {
    valueDefault?: string;
    options: IDropDownListOptions[];
    onChangeValue: (value: string) => void;
}

function DropDownListM3(props: IDropDownList) {
    const [idSelected, setIDSelected] = useState(0);
    const [isActive, setActive] = useState(false);
    const ArrowDownMemo = useMemo(() => {
        return <ArrowStateOpen></ArrowStateOpen>;
    }, []);
    const SelectedIconMemo = useMemo(() => {
        return <SelectedIcon></SelectedIcon>;
    }, []);
    const dropDownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropDownRef, () => setActive(false));

    const heandlerChange = useCallback((index: number) => {
        setIDSelected(index);
        props.onChangeValue(props.options[index].value);
        setActive(false);
    }, []);

    useEffect(() => {
        if (props.valueDefault === undefined) setIDSelected(0);
        else {
            const index_seleted: number = props.options.findIndex((elem) => {
                return elem.value === props.valueDefault;
            });

            if (index_seleted === -1) {
                setIDSelected(0);
                console.error("Not found default value -> " + props.valueDefault + " in list seleted default value 0");
            }
            else setIDSelected(index_seleted);
        };

        props.onChangeValue(props.options[idSelected].value);
        console.log("Mount");
    }, []);

    return (
        <>
            <div>
                <div className={isActive ? "DropDownList_Main Active" : "DropDownList_Main"} onClick={() => {
                    setActive(!isActive);
                }} ref={dropDownRef}>
                    <div className="DropDownList_Lable">
                        {props.options[idSelected]?.lable}
                    </div>
                    <div className="DropDownList_Icon">
                        {ArrowDownMemo}
                    </div>
                </div>
                {isActive &&

                    <div className="DropDownList_Options">

                        {props.options.map((elem, index) => (
                            <div
                                className={idSelected === index ? "DropDownList_Option Selected" : "DropDownList_Option"}
                                key={`${elem.lable}_${index}`}
                                onClick={() => {
                                    heandlerChange(index);
                                }}>

                                <div className="DropDownList_Icon">
                                    {SelectedIconMemo}
                                </div>

                                <div className="DropDownList_Lable">
                                    {elem.lable}
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default memo(DropDownListM3);