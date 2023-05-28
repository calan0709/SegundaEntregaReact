
import { Productos } from './Productos'
import { Carro } from './Carro'
import { Link, NavLink } from 'react-router-dom'
import icono from './img/farmacia.png'
import { Detalles } from './Detalles'

export const Navbar = ({mgs}) => {


  return (
    <>
       <nav className='navcss'>
          <h1>FarmaciaTrader</h1>
          <div className='navbtn'>
            <ul>
              <li><NavLink to= '/#' className='nav-link'><img src={icono}></img></NavLink></li>
              <li><NavLink to= '/Productos' className='nav-link'>Productos</NavLink></li>
              <li><NavLink to= '/Carro' className='nav-link'>Carro</NavLink></li>

            </ul>
              <Carro/>
          </div>
        </nav>
    </>
  )
}


