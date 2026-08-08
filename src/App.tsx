import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import Header from './assets/Header/Header'
import Loader from './assets/Loader/Loader'
import MainScreen from './assets/MainScreen/MainScreen';
import ModalWindowBase from './assets/ModalWindow/ModalWindowBase'
import { useTimerManager } from './assets/Classes/TimerManager/TimerContext';
import { useAppDispatch, useAppSelector } from './store/Hooks/useAppHooks';
import { initApp } from './store/Slices/AppSlice';
import type { TimerAction } from './assets/Classes/TimerManager/TimerMenager';


async function req() {
  const response = await fetch("/api/v1/header.json");
  const data = await response.json();

  console.log(data);
}

function App() {
  const testPage: boolean = false;

  const timerManager = useTimerManager();
  const modalState = useSelector((state) => state.ModalState);
  const appState = useAppSelector((state) => state.AppState);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(initApp());
  }, [])

  useEffect(() => {
    console.log(appState.conf?.conf.version);
    const timer_conf = appState.conf?.conf.config_timer_default;
    if (timer_conf !== undefined) {
      timerManager.addTimer({
        duration: timer_conf.time,
        stateAction: timer_conf.action_state as TimerAction
      });
    }

  }, [appState.readyLoad]);

  useEffect(() => {
    console.log(modalState);
  }, [modalState])

  return (
    <>
      {testPage ?
        <>
          <div className="testMain">
            <div className='testConteiner'>
              <Loader></Loader>
            </div>
          </div>
        </>
        :
        <>
          <div className="MainPage">
            <Loader/>
            {modalState.isOpen && <ModalWindowBase />}
            <Header></Header>
            <MainScreen></MainScreen>
          </div>
        </>}
    </>
  )
}

export default App
