import { memo, useCallback, useState } from 'react';
import { debugUI } from '@/utils/debug'
import { ButtonM3 } from '@/shared/ui'
import { useModalWindow } from '@/app/lib';

function HeaderButtonAlarm() {
    const modal = useModalWindow();
    const [countAlarms, updateCount] = useState<number>(0);
    const handlerAlarmModal = useCallback(() => {
        updateCount(0);
        debugUI("Alarm Modal Window");
        modal.builder({
            children: <>1234</>,
            label: <div>Timer</div>
        });
    }, [])

    return (
        <>
            <ButtonM3
                lable={'00:00'}
                icon={'alarm'}
                onClick={() => {
                    handlerAlarmModal();
                }}
                style={{
                    variant: 'outline',
                    border: 'square',
                    isActive: true
                }}
                notifiBadgeInfo={countAlarms > 0 ? countAlarms.toString() : null}
                notifiBadgeType={countAlarms > 0 ? 'count' : null}
            />
        </>
    );
}

export default memo(HeaderButtonAlarm);