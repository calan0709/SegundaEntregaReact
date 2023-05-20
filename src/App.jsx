import { useState } from 'react'
import './App.css'
import homefarmacia from './componente/img/fondofarmacia.jpg'
import load from './componente/img/loading.jpg'

function App({msg}) {
  const [count, setCount] = useState(0)

  return (
    <>

 {/*  <img src={homefarmacia} className='inicio'></img> */}
  <h1 className='bienvenidos'>Bienvenidos</h1>
   
    
    </>
  )
}

export default App
