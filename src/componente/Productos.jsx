import {getFirestore, collection, getDocs} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Detalles } from './Detalles'
import { useNavigate } from 'react-router-dom'


export const Productos = () => {
  const navigate = useNavigate()
  /* --------------- */
  const db = getFirestore()

  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsdb = collection(db, 'productos')
  getDocs(productsdb)
   .then(products)
   console.log(products.length)
   setProducts(products.length)
   /* setProducts(products.docs.map(doc=>({id: doc.id,...doc.data()}))) */
  }, [db])
  
  
  /* --------------- */
  const onBack = () =>{
    navigate(-1)
  }

  return (
    <> 
    {
      products.length
      ?
      <>
        <h1 className='produc'>Productos</h1>
        <ul>
          {
            products.map(products=>(
              <li key={products.id}>
                <a> {products.name}</a>
                <img src={products.imagen}></img>
                <button >Agregar a Carro</button>
                {/* <button onClick={Detalles}>Detalles  </button> */}
              </li>
            ))
          }
        </ul>
        <button onClick={onBack}>Volver</button>
      </>
      :
      <h3>Loading...</h3>
      }
  
    </>
  )
}
