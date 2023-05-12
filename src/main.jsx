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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzlCfs7G3IfA2SmO4Hmyif6VfwapywuKI",
  authDomain: "miproductos.firebaseapp.com",
  projectId: "miproductos",
  storageBucket: "miproductos.appspot.com",
  messagingSenderId: "1073638629734",
  appId: "1:1073638629734:web:265a6ab9226bee114228a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
