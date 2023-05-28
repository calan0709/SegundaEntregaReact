import './App.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const param = useParams
const {products} = param


function App({msg}) {
  
  return (
    <>

  <h1 className='bienvenidos'>Bienvenidos</h1>

    
    </>
  )
}

export default App
