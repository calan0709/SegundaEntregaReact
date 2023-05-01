import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Navbar } from './componente/Navbar.jsx'
import { Productos } from './componente/Productos.jsx'
import { Ingresar } from './componente/Ingresar.jsx'
import { Contacto } from './componente/Contacto.jsx'
import { Carro } from './componente/Carro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>
    <Navbar/>
  <Routes>
    
    <Route path='/' element={<App msg={"Ruta raiz"}/>}/>
    <Route path='/Productos' element={<Productos msg={"Productos"}/>}/>
    <Route path='/Ingresar' element={<Ingresar msg={"Ingresar"}/>}/>
    <Route path='/Contacto' element={<Contacto msg={"Contacto"}/>}/>
    <Route path='/Carro' element={<Carro msg={"Carro"}/>}/>
    <Route path='/*' element={<App msg={"Ruta por Defecto"}/>}/>
    
  </Routes>
</BrowserRouter>

  </React.StrictMode>,
)
