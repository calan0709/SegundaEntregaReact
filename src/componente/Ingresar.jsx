import { useParams, useNavigate } from 'react-router-dom'
import imagenfarma from './img/ingresar.png'

export const Ingresar = () => {

  const params =useParams()
  const navigate = useNavigate()
  const onBack = () =>{
    navigate(-1)
  }

  return (
    <div className='tarjeraingreso'>
        <img src={imagenfarma} alt=""></img>
        <div className='ingreso'>
        <h1>Ingresar</h1>
            <label htmlFor="">Usuario</label>
            <input type="text" />
            <label htmlFor="">Contraseña</label>
            <input type="text" />
        </div>
        <form action="" className='generar'>
            <h2>Suscribite</h2>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Apellido</label>
            <input type="text" />
            <label htmlFor="">Mail</label>
            <input type="text" />
            <label htmlFor="">Usuario</label>
            <input type="text" />
            <label htmlFor="">Contraseña</label>
            <input type="text" />
            <input type="submit" />
        </form>
        <button onClick={onBack}>Volver</button>
    </div>
  )
}
