import './App.css'
import './assets/styles/Thems_Color/Wight_Them.scss'
import { Header, ViewPortLayout } from '@/widgets';
import { NavigationProvider, ModalWindowProvider } from '@/app/providers'


function App() {

  return (
    <ModalWindowProvider>
      <NavigationProvider>
        <Header></Header>
        <ViewPortLayout></ViewPortLayout>
      </NavigationProvider>
    </ModalWindowProvider>
  )
}

export default App
