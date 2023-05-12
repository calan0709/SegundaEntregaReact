import { useState } from 'react'
import './App.css'
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
