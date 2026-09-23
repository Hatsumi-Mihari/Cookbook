import './App.css'
import './assets/styles/Thems_Color/Wight_Them.scss'
import Header from './components/layout/Header/Header'
import { NavigationProvider } from './app/providers/NavigationProvider'
import ViewPortLayout from './components/layout/Viewport/ViewPortLayout';


function App() {

  return (
    <NavigationProvider>
      <Header></Header>
      <ViewPortLayout></ViewPortLayout>
    </NavigationProvider>
  )
}

export default App
