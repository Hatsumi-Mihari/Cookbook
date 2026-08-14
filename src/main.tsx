import { StrictMode, Profiler } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './store/Store.tsx'
import { TimerProvider } from './assets/Classes/TimerManager/TimerContext.tsx';
import { NavigationProvider } from './assets/Classes/Navigation/NavigationProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <NavigationProvider>
        <TimerProvider>
          <Profiler id="App" onRender={() => { }}>
            <App />
          </Profiler>
        </TimerProvider>
      </NavigationProvider>
    </Provider>
  </StrictMode>,
)
