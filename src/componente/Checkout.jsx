
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'


export const Checkout = () => {
  
  const inputRef = useRef()

  const {handleInputChange, form} = useForm({
    nombre: "",
    apellido: "",
    mail: ""
  })

  const setFocus = ( node ) => {
    alert('Se hizo click!')
    node.focus()
  }

const inputClassName = (name) => {
    return form[name].length < 5 ? "input-red" : "input-green"
  } 

  const handleSubmit = (e) => {
    e.preventDefaul()
    const data = {
      "name" : form.nombre,
      "lastname" : form.apellido,
      "mail" : form.mail
    }
   /*  -------enviar a --------- */
  }

  return (
    <>
      <h1>Mi segunda App en React!</h1>
      <form onSubmit={handleSubmit} className='user-form'>
        <input
          name='nombre'
          placeholder='Ingrese Nombre...'
          className={inputClassName('nombre')}
          ref={inputRef}
          type="text"
          value={form.nombre}
          onChange={(e) => {handleInputChange(e)}}
        />
        <input
          name='apellido'
          placeholder='Ingrese Apellido...'
          className={inputClassName('apellido')}
          type="text"
          value={form.apellido}
          onChange={(e) => {handleInputChange(e)}}
        />
        <input
          name='mail'
          placeholder='Ingrese Mail...'
          className={inputClassName('Mail')}
          type="number"
          value={form.edad}
          onChange={(e) => {handleInputChange(e)}}
        />
      </form>
      <button type='submit' onClick={() => { setFocus(inputRef.current)}}>
        Click!
      </button>
    </>
  )
}
