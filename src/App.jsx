import { collection, getDocs, getFirestore } from 'firebase/firestore'
import './App.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function App({msg}) {

  
  /* ------------------------------------------ */
  
  const db = getFirestore()
  const [ofertas, setProducts] = useState([])
  
  useEffect(() => {
    const ofertasdb = collection(db, 'ofertas')
    getDocs(ofertasdb)
    .then(oferta =>{
      setProducts(oferta.docs.map(doc=>({id: doc.id,...doc.data()})))
    })
  }, [db])
  
  
  /* ------------------------------------------ */

  
  return (
    <>

  <h1 className='bienvenidos'>Bienvenidos</h1>

    {
      ofertas.length
      ?
      <>
        <div className='tarjetaofertas'>
        <ul className='offertas'>
          {
            ofertas.map(ofertas=>(
            
                <img key={ofertas.id} src={ofertas.img} ></img>
            
            ))
          }
        </ul>
        </div>
      </>
      :
      <h3>Loading...</h3>
    } 
    
    </>
  
  )
}

export default App
