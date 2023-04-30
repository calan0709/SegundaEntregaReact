
import { Productos } from './Productos'
import { Ingresar } from './Ingresar'
import { Contacto } from './Contacto'
import { Carro } from './Carro'

export const Navbar = ({mgs}) => {
  return (
    <>
       <div className='navcss'>
          {/* <img src={farmacia}/> */}
          <h1>FarmaciaTrader</h1>
          <div className='navbtn'>
              <Btn texto = 'Productos'/>
              <Btn texto = 'Contactos'/>
              <Btn texto = 'Ingresar'/>
              <Btn texto = 'Nosotros'/>
              <Carro/>
          </div>
        </div>
    </>
  )
}

export const Btn = ({texto}) => { 
    return (
  
        <button className='btnnav' onClick={texto}>{texto}</button>
        
    )
  }