import './MainView.scss'
import ButtonM3 from '../components/ui/button/ButtonM3'
import {debugUI } from '../utils/debug'

function MainView() {
    return (<div className="MainView">
        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            variant={'primary'}
            isActive={true}
            type={'round'}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Sasha'}
            icon={'placeholder'}
            onClick={() => { debugUI("Sasha Is Hare") }}
            variant={'secondary'}
            isActive={true}
            type={'round'}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Anny'}
            icon={'placeholder'}
            onClick={() => { debugUI("Anny Bunchoi Is Hare") }}
            variant={'outline'}
            isActive={true}
            type={'square'}
             notifiBadgeInfo={'!'}
            notifiBadgeType={'error'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            variant={'danger'}
            isActive={true}
            type={'square'}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            variant={'error'}
            isActive={true}
            type={'square'}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            variant={'error'}
            isActive={true}
            type={'square'}
            notifiBadgeInfo={'1'}
            notifiBadgeType={'count'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            variant={'error'}
            isActive={false}
            type={'round'}
            notifiBadgeInfo={'!'}
            notifiBadgeType={'error'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            variant={'borderless'}
            isActive={false}
            type={'round'}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare count") }}
            variant={'borderless'}
            isActive={true}
            type={'round'}
            notifiBadgeInfo={null}
            notifiBadgeType={null}
        />
    </div>);
}

export default MainView;