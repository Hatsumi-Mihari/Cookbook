
import type { Icons_Index } from '../../../entitis/ui/icons_index'
import type {ButtonVariantUI} from '../../../entitis/ui/button_types'
import iconsUrl from '../../../assets/icons/icons.svg'
import type { NotifiType } from '../badge/Badge'
import Badge from '../badge/Badge'
import './ButtonM3.scss'



export interface ButtonM3 {
    lable: string | null,
    icon: Icons_Index | null,
    style?: ButtonVariantUI,
    notifiBadgeInfo: String | null,
    notifiBadgeType: NotifiType | null,
    onClick: () => void
};

function ButtonM3(props: ButtonM3) {
    return (
        <>
            <div className={`ButtonM3_base ${props.style?.variant ?? ''} ${props.style?.border ?? ''} ${props.style?.isActive === false ? 'unclickable' : ''}`} onClick={() => props.onClick()}>
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
