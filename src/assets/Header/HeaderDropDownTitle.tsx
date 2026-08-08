import DropDownListM3 from '../DropDownListM3/DropDownListM3';
import { useAppSelector } from '../../store/Hooks/useAppHooks';
import { memo, useEffect, useState } from 'react'


function HeaderDropDownTitle() {
    const [headerLable, setHeaderLable] = useState("");
    const appstate = useAppSelector((state) => state.AppState);

    useEffect(() => {
        if (appstate.header?.header) setHeaderLable(appstate.header?.header?.defaultValue);
    }, [appstate.readyLoad])

    return <>
        {appstate.readyLoad ?
            <>
                <DropDownListM3
                    options={appstate.header?.header?.dropdownList.map((item) => ({
                        lable: item.lable,
                        value: item.value,
                        icon: null,
                    })) || []}
                    onChangeValue={setHeaderLable}
                    valueDefault={appstate.header?.header?.defaultValue}
                />
                <div className="HeaderLable">{headerLable}</div>
            </> : <></>}
    </>
}

export default memo(HeaderDropDownTitle);