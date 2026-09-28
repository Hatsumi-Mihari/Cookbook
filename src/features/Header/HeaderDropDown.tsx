import { DropDowntM3 } from '@/shared/ui'
import { debugUI } from '@/utils/debug';
import { memo } from 'react'

function HeaderDropDown() {
    return (
        <>
            <DropDowntM3
                icon={'placeholder'}
                valueDefault={'Marcy'}
                style={'outline'}
                isActive={true}
                options={[
                    {
                        value: 'Marcy',
                        icon: null
                    },
                    {
                        value: 'Anny',
                        icon: null
                    },
                    {
                        value: 'Sasha',
                        icon: null
                    },
                    {
                        value: 'Luz',
                        icon: null
                    },
                ]}
                onChangeValue={(value: string) => {
                    debugUI("Onchange value -> " + value);

                }}
            />
        </>
    );
}

export default memo(HeaderDropDown);