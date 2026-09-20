import { StrictMode, Profiler } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './store/Store.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>


            <Profiler id="App" onRender={() => { }}>
              <App />
            </Profiler>

    </Provider>
  </StrictMode>,
)
