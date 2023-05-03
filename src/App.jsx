import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './componente/Navbar'
import { Contenedor } from './componente/Contenedor'
import { Ingresar } from './componente/Ingresar'
import { Productos } from './componente/Productos'
import homefarmacia from './componente/img/homefarmacia.jpg'

function App({msg}) {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Bienvenidos</h1>
    <img src={homefarmacia} className='inicio'></img>
    </>
  )
}

export default App
