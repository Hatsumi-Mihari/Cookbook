import { DropDowntM3 } from '@/shared/ui'
import { debugUI } from '@/utils/debug';
import { memo } from 'react'
import {useAppStore} from '@/store'


function HeaderDropDown() {
    const AppDispatch = useAppStore();

    return (
        <>
            <DropDowntM3
                icon={'placeholder'}
                valueDefault={'Marcy'}
                style={'outline'}
                isActive={true}
                options={[
                    {
                        value: 'cards',
                        icon: null
                    },
                    {
                        value: 'map',
                        icon: null
                    },
                    {
                        value: 'debug',
                        icon: null
                    },
                    {
                        value: 'loader',
                        icon: null
                    },
                ]}
                onChangeValue={(value: string) => {
                    debugUI("Onchange value 1 -> " + value);
                    AppDispatch.setDropDownHeaderValue(value);
                }}
            />
        </>
    );
}

export default memo(HeaderDropDown);