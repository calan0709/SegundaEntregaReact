import { useParams, useNavigate } from 'react-router-dom'


export const Contacto = () => {

  const params =useParams()
  const navigate = useNavigate()
  const onBack = () =>{
    navigate(-1)
  }

  return (
    <>
        
    <form action="">
        <h2>Consultas</h2>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Apellido</label>
        <input type="text" />
        <label htmlFor="">Mail</label>
        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" />
    </form>

    </>
  )
}
