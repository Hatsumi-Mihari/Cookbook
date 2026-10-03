import './Badge.scss'
export type NotifiType = 'count' | 'error';

export interface BadgeNotifi{
    notifiInfo: String,
    notifiType: NotifiType,
}

function Badge(props: BadgeNotifi) {
    return ( 
    <div className={`Badge_Notifi ${props.notifiType ?? ''}`}>
        <p className="Badge_Notifi_content">{props.notifiInfo}</p>
    </div> 
    );
}

export default Badge;