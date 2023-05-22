import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useNavigate, useParams } from "react-router-dom"


export const Detalles = () => {
  const navigate = useNavigate()
  const db = getFirestore()
  const params = useParams
  const {productid} = params
  const [product, setProducts] = useState(null)
  /* ----------------------------- */

useEffect(()=>{
const itemdb = doc (db, 'productos', productid)
getDoc(itemdb)
.then((product)=>{
  if (product.exists()){
    setProducts({id: product.id, ...product.data()})
  }
})
}
)

  /* ----------------------------- */

  const onBack = () => {
    navigate(-1)
  }
  return (
    <>
    {
      product
      ?
      <div>Detalles

      <button onClick={onBack}></button>
      </div>
      :
      <h3>Loading...</h3>
    } 
    
    </>
  )
}


{/* <div>
        <a>Marca: {productos.marca}</a>
        <a>Detalle: {productos.detalle}</a>
        <a>Precio: {productos.precio}</a>
        <a>Stock: {productos.stock}</a>
</div> */}