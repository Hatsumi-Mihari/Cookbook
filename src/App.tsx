import './App.css'
import './assets/styles/Thems_Color/Wight_Them.scss'
import { Header, ViewPortLayout } from '@/widgets';
import { NavigationProvider, ModalWindowProvider, BootStrapProvider } from '@/app/providers'


function App() {

  return (
    <BootStrapProvider>
      <ModalWindowProvider>
        <NavigationProvider>
          <Header></Header>
          <ViewPortLayout></ViewPortLayout>
        </NavigationProvider>
      </ModalWindowProvider>
    </BootStrapProvider>
  )
}

export default App
