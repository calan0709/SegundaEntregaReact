import listaproductos from './Producto.json'

export const Productos = () => {
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
                 {/*  <p>{productos.imagen}</p> */}
                  <button></button>

                </li>
              ))
            }
          </ul>

        </div>

    </div>
  )
}
