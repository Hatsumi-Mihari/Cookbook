import './TimeInput.scss'
import {memo, useCallback, useState, useRef, useEffect} from 'react'

interface TimerInput{
    refInputSec: React.RefObject<HTMLInputElement | null>;
    refInputMin:React.RefObject<HTMLInputElement | null>;
}

function TimerInput(props: TimerInput) {




    return (
        <>
            <div className="TimeInputMainConteiner">
                <div className="TimeInputConteiner">
                    <div className="TimerInputWrap">
                        <input type="number" defaultValue="" placeholder="00" min="0" max="59" className="TimeInputInput"  ref={props.refInputMin}>
                        </input>
                    </div>
                    <div className="TimeInputLable">
                        Minutes
                    </div>
                </div>
                <div className="TimeInputConteiner">
                    <div className="TimerInputWrap">
                        <input type="number" defaultValue="" placeholder="00" min="0" max="59" className="TimeInputInput" ref={props.refInputSec}>
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