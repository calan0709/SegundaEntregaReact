import {getFirestore, collection, getDocs} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Productos = () => {
  
  
  const navigate = useNavigate()
  /* --------------- */
  
  const db = getFirestore()
  const [products, setProducts] = useState([])
 
 useEffect(() => {
   const productsdb = collection(db, 'productos')
   getDocs(productsdb)
   .then(products =>{
     setProducts(products.docs.map(doc=>({id: doc.id,...doc.data()})))
     
    })
  }, [db])
  
  
  /* --------------- */
  const onBack = () =>{
    navigate(-1)
  }
  
  
  /*  const fdetalles = ()=>{
    <Link to={`/Detalles/${products.id}`}>{products.name}</Link>
  }  */
  
  return (
    <> 
 
{
      products.length
      ?
      <>
        <h1 className='produc'>Productos</h1>
        <div className='contenidotarjeta'>
        <ul className='tarjetas'>
          {
            products.map(products=>(
              <li key={products.id} className='lista'>
                <Link to={`/Detalles/${products.id}`}>{products.name}</Link>
                <img src={products.img}></img>
                <button >Agregar a Carro</button>
              </li>
            ))
          }
        </ul>
        </div>
        <button onClick={onBack}>Volver</button>
      </>
      :
      <h3>Loading...</h3>
    }
  
    </>
  )
}
