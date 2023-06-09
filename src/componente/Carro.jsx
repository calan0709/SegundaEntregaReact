import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Productos } from './Productos'
import { Checkout } from './Checkout'

export const Carro = () => {

  const params =useParams()
  const navigate = useNavigate()
  const onBack = () =>{
    navigate(-1)
  }
/* ----------------------------------------------------- */
const product = useState

/* ----------------------------------------------------- */

/* ----------------------------------------------------- */
/* 
export const useCounter = (valorInicial=10) => { */
  
 /*  const [contador, setContador] = useState(valorInicial)
    
  const aumentaContador = (n) => {
    setContador(contador + n)
  }

  const decrementaContador = (n) => {
    setContador(contador - n)
  }

  const restableceContador = () => {
    setContador(valorInicial)
  } */
  
 /*  return {
    contador,
    aumentaContador,
    decrementaContador,
    restableceContador
  } */

/* ----------------------------------------------------- */
  return (
    <div>
        <p>🛒</p>
        <p>6</p>
        <ul>
         
          <button>Eliminar</button>

        </ul>
        <button onClick={onBack}>Volver</button>
        <Checkout/>
    </div>
  )
}
