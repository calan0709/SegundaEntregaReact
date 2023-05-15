import { useParams, useNavigate } from 'react-router-dom'


export const Contacto = () => {

  const params =useParams()
  const navigate = useNavigate()
  const onBack = () =>{
    navigate(-1)
  }

  return (
    <>
        <div>

            <h2>Contactos</h2>
            <p>Tel: 1140334983</p>
            <p>Mail: Farma.trader@gmail.com</p>
            <p>Facebook: Farmatrader</p>
            <p>Instagram: Farma.trader</p>
            <p>Ubicacion: Av. Vergara 1910 , Hurlingham , Buenos Aires</p>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1323.5932924243155!2d-58.67172777016603!3d-34.51734201197171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd452b3bccdb%3A0xb0f15bf735214d59!2sFarmacia%20L.A.I.%20Villa%20de%20Mayo%20SCS!5e0!3m2!1ses-419!2sar!4v1684113952867!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            
        </div>

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
