import { useParams, useNavigate } from 'react-router-dom'
import listaproductos from './Producto.json'

export const Productos = () => {
  
  const params =useParams()
  const navigate = useNavigate()
  const onBack = () =>{
    navigate(-1)
  }

  return (
    
    <div>
      <h1>Productos</h1>

      <div >

          <ul className='contenidotarjeta'>
            {
              listaproductos.map( productos => (
                <li key={productos.id} className='tarjetas'>
                  <a>Nombre: {productos.name}</a>
                  <a>Marca: {productos.marca}</a>
                  <a>Detalle: {productos.detalle}</a>
                  <a>Precio: {productos.precio}</a>
                  <a>Stock: {productos.stock}</a>
                  <img src={productos.imagen}></img>
                  <button >Agregar a Carro</button>

                </li>
              ))
            }
          </ul>

        </div>
<button onClick={onBack}>Volver</button>
    </div>
  )
}
