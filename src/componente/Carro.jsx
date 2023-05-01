import { useParams, useNavigate } from 'react-router-dom'


export const Carro = () => {

  const params =useParams()
  const navigate = useNavigate()
  const onBack = () =>{
    navigate(-1)
  }

  return (
    <div>
        <p>🛒</p>
        <p>6</p>
    </div>
  )
}
