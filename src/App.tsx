import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import Header from './assets/Header/Header'
import MainCard from './assets/Main_Card/Main_Card';
import TimeInput from './assets/Inputs/TimeInput/TimeInput'
import MainScreen from './assets/MainScreen/MainScreen';
import ModalWindowBase from './assets/ModalWindow/ModalWindowBase'
import { useTimerManager } from './assets/Classes/TimerManager/TimerContext';

function App() {
  const testPage: boolean = false;
  const timerManager = useTimerManager();
  const modalState = useSelector((state) => state.ModalState);


  useEffect(() => {
    timerManager.addTimer({
      duration: '00:10',
      stateAction: 'INF'
    });
  }, []);

  useEffect(() => {
    console.log(modalState);
  }, [modalState])

  return (
    <>
      {testPage ?
        <>
          <div className="testMain">
            <div className='testConteiner'>
              <TimeInput></TimeInput>
            </div>
          </div>
        </>
        :
        <>
          <div className="MainPage">
            {modalState.isOpen && <ModalWindowBase />}
            <Header></Header>
            <MainScreen></MainScreen>
          </div>
        </>}
    </>
  )
}

export default App
