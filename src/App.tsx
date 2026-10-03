import './App.css'
import './assets/styles/Thems_Color/Wight_Them.scss'
import { Header, ViewPortLayout } from '@/widgets';
import { NavigationProvider, ModalWindowProvider, BootStrapProvider, TimerManagerProvider } from '@/app/providers'


function App() {

  return (
    <BootStrapProvider>
      <TimerManagerProvider>
        <ModalWindowProvider>
          <NavigationProvider>
            <Header></Header>
            <ViewPortLayout></ViewPortLayout>
          </NavigationProvider>
        </ModalWindowProvider>
      </TimerManagerProvider>
    </BootStrapProvider>
  )
}

export default App
