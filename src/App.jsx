import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './componente/Navbar'
import { Contenedor } from './componente/Contenedor'
import { Ingresar } from './componente/Ingresar'
import { Productos } from './componente/Productos'

function App({msg}) {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>  */}
    <h1>holis</h1>
    <h4>{msg}</h4>
    {/* <Ingresar/> */}
    <Productos/>
    
    </>
  )
}

export default App
