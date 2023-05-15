import { useState } from 'react'
import './App.css'
import homefarmacia from './componente/img/homefarmacia.jpg'
import load from './componente/img/loading.jpg'

function App({msg}) {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Bienvenidos</h1>
    {/* <img src={homefarmacia} className='inicio'></img> */}
    <div className='cardpricipal'></div>
    <div className='carddescuentos'>
      <h3>¡Aprovecha estas ofertas!</h3>
      <p>¡Ofertas por tiempo limitado!</p>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
      <div className=''>
        <img src={load}></img>
        <p>Producto x</p>
        <p>Costo con descuento</p>
        <button>Agregar a Carro</button>
      </div>
    </div>
    <div className='cardoferta'>

        <div className='ofertabelleza'>
            <img src={load}></img>
            
        </div>
        <div className='ofertadermocosmetica'>
            <img src={load}></img>
            
        </div>
        <div className='ofertacuidadopersonal'>
            <img src={load}></img>
           
        </div>
        <div className='ofertabebes'>
            <img src={load}></img>
           
        </div>
        <div className='ofertasaludfarma'>
            <img src={load}></img>
         
        </div>

    </div>
    <div className='cardmasofertas'>

      <h3>Descuentos Imperdibles</h3>
      <div> <img src={load} alt="" /> </div>
      <div> <img src={load} alt="" /> </div>
      <div> <img src={load} alt="" /> </div>
      <div> <img src={load} alt="" /> </div>
      <div> <img src={load} alt="" /> </div>
      <div> <img src={load} alt="" /> </div>

    </div>

    </>
  )
}

export default App
