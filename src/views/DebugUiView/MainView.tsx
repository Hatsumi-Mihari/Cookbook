import './MainView.scss'
import ButtonM3 from '../../components/ui/button/ButtonM3'
import DropDowntM3 from '../../components/ui/dropdown/DropDownM3'
import { debugUI } from '../../utils/debug'

function MainView() {
    return (<div className="DebugView">

        <DropDowntM3
            icon={'placeholder'}
            valueDefault={'1234'}
            style={'outline'}
            isActive={false}
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
            onChangeValue={(value: string) => { debugUI("Onchange value -> " + value); }}
        />

        <DropDowntM3
            icon={'placeholder'}
            valueDefault={'1234'}
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
            onChangeValue={(value: string) => { debugUI("Onchange value -> " + value); }}
        />

        <DropDowntM3
            icon={'placeholder'}
            valueDefault={'1234'}
            style={'primary'}
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
            onChangeValue={(value: string) => { debugUI("Onchange value -> " + value); }}
        />


        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            style={{
                variant: 'primary',
                border: 'square',
                isActive: true
            }}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Sasha'}
            icon={'placeholder'}
            onClick={() => { debugUI("Sasha Is Hare") }}
            style={{
                variant: 'secondary',
                border: 'round',
                isActive: true
            }}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Anny'}
            icon={'placeholder'}
            onClick={() => { debugUI("Anny Bunchoi Is Hare") }}
            style={{
                variant: 'outline',
                border: 'square',
                isActive: true
            }}
            notifiBadgeInfo={'!'}
            notifiBadgeType={'error'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            style={{
                variant: 'danger',
                border: 'square',
                isActive: true
            }}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            style={{
                variant: 'error',
                border: 'square',
                isActive: true
            }}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            style={{
                variant: 'error',
                border: 'square',
                isActive: true
            }}
            notifiBadgeInfo={'1'}
            notifiBadgeType={'count'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            style={{
                variant: 'error',
                border: 'round',
                isActive: false
            }}
            notifiBadgeInfo={'!'}
            notifiBadgeType={'error'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            style={{
                variant: 'borderless',
                border: 'round',
                isActive: false
            }}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            style={{
                variant: 'borderless',
                border: 'round',
                isActive: true
            }}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />
    </div>);
}

export default MainView;