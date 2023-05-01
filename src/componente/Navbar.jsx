
import { Productos } from './Productos'
import { Ingresar } from './Ingresar'
import { Contacto } from './Contacto'
import { Carro } from './Carro'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = ({mgs}) => {



  return (
    <>
       <nav className='navcss'>
          {/* <img src={farmacia}/> */}
          <h1>FarmaciaTrader</h1>
          <div className='navbtn'>
            <ul>

              <li><NavLink to= '/#' className='nav-link'>Inicio</NavLink></li>
              <li><NavLink to= '/Productos' className='nav-link'>Productos</NavLink></li>
              <li><NavLink to= '/Ingresar' className='nav-link'>Ingresar</NavLink></li>
              <li><NavLink to= '/Contacto' className='nav-link'>Contactos</NavLink></li>
              <li><NavLink to= '/Carro' className='nav-link'>Carro</NavLink></li>

            </ul>
              <Carro/>
          </div>
        </nav>
    </>
  )
}


