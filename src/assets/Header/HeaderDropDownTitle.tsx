import DropDownListM3 from '../DropDownListM3/DropDownListM3';
import { useAppSelector } from '../../store/Hooks/useAppHooks';
import { memo, useEffect, useState } from 'react'
import { useAppDispatch } from '../../store/Hooks/useAppHooks';
import { updateGlobalFilter, updatePageTitle } from '../../store/Slices/AppSlice';


function HeaderDropDownTitle() {
    const [dropdownOut, updateDopDownout] = useState({
        value: "", typeID: 0
    });
    const appstate = useAppSelector((state) => state.AppState);
    const appDispatch = useAppDispatch(); 

    useEffect(() => {
        if (appstate.header?.header) updateDopDownout({
            value: appstate.header.header.defaultValue,
            typeID: appstate.header.header.defaultFilterID
        });
        appDispatch(updatePageTitle(dropdownOut.value));
    }, [appstate.readyLoad])

    useEffect(() => {
        console.log(dropdownOut);
        appDispatch(updateGlobalFilter(dropdownOut.typeID));
        appDispatch(updatePageTitle(dropdownOut.value));
    }, 
    [dropdownOut]);

    return <>
        {appstate.readyLoad ?
            <>
                <DropDownListM3
                    options={appstate.header?.header?.dropdownList.map((item) => ({
                        lable: item.lable,
                        value: item.value,
                        typeID: item.typeID,
                        icon: null,
                    })) || []}
                    onChangeValue={updateDopDownout}
                    valueDefault={appstate.header?.header?.defaultValue}
                />
                
            </> : <></>}
    </>
}

export default memo(HeaderDropDownTitle);