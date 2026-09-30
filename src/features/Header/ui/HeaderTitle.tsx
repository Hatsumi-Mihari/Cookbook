import { memo } from 'react'
import { useAppStore } from '@/store'
import { TextFild } from '@/shared/ui'

function HeaderTitle() {
    const AppDispatch = useAppStore();

    return (
        <TextFild
            text={AppDispatch.DropDownHeaderValue}
            classname={'Header_Lable'}
        />);
}

export default memo(HeaderTitle);