import './TimeInput.scss'
import {memo} from 'react'

function TimerInput() {
    return (
        <>
            <div className="TimeInputMainConteiner">
                <div className="TimeInputConteiner">
                    <div className="TimerInputWrap">
                        <input type="number" placeholder="00" min="0" max="59" className="TimeInputInput">
                        </input>
                    </div>
                    <div className="TimeInputLable">
                        Minutes
                    </div>
                </div>
                <div className="TimeInputConteiner">
                    <div className="TimerInputWrap">
                        <input type="number" placeholder="00" min="0" max="59" className="TimeInputInput">
                        </input>
                    </div>
                    <div className="TimeInputLable">
                        Seconds
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(TimerInput);