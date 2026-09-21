
import type { Icons_Index } from '../../../types/icons_index'
import iconsUrl from '../../../assets/icons/icons.svg'
import type { NotifiType } from '../badge/Badge'
import Badge from '../badge/Badge'
import './ButtonM3.scss'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'error' | 'borderless';
type ButtonType = 'square' | 'round';

export interface ButtonM3 {
    lable: string | null,
    icon: Icons_Index | null,
    variant: ButtonVariant,
    type: ButtonType,
    clickable: boolean | null,
    notifiBadgeInfo: String | null,
    notifiBadgeType: NotifiType | null,
    onClick: () => void
};

function ButtonM3(props: ButtonM3) {
    return (
        <>
            <div className={`ButtonM3_base ${props.variant ?? ''} ${props.type ?? ''} ${props.clickable === false ? 'unclickable' : ''}`} onClick={() => props.onClick()}>
                {props.icon !== null ?
                    <svg>
                        <use href={`${iconsUrl}#${props.icon}`} />
                    </svg> : <></>
                }

                {props.lable !== null ?
                    <p className='ButtoM3_lable'>{props.lable}</p> : <></>
                }

                {(props.notifiBadgeInfo !== null && props.notifiBadgeType !== null) ?
                    <>
                        <Badge
                        notifiInfo={props.notifiBadgeInfo}
                        notifiType={props.notifiBadgeType}
                    />
                    </> : <></>
                }
            </div>
        </>
    );
}

export default ButtonM3;
