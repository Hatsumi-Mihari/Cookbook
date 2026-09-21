import './MainView.scss'
import ButtonM3 from '../components/ui/button/ButtonM3'
import {debugUI, debugStore } from '../utils/debug'

function MainView() {
    return (<div className="MainView">
        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            variant={'primary'}
            type={'round'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            variant={'secondary'}
            type={'round'}
        />

        <ButtonM3
            lable={'Marcy'}
            icon={'placeholder'}
            onClick={() => { debugUI("Marcy Wuz Is Hare") }}
            variant={'outline'}
            type={'square'}
        />
    </div>);
}

export default MainView;