
import './App.css'
import {debugUI, debugStore } from './utils/debug'


function App() {
  debugUI("UI debug main");
  debugStore("test");
  return (
    <>
    <button onClick={() => {debugUI("UI debug main");}}>click</button>
    <h1>hello world</h1>
    </>
  )
}

export default App
