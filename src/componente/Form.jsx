import React, { useState } from 'react'

export const Form = () => {

const ckeckoutForm = ({onConfirm})=>{
    const [nombre, setnombre] = useState('')
    const [tel, settel] = useState('')
    const [email, setemail] = useState('')

    const handleConfirm = (eve) =>{
        eve.preventdefoult()
        const userData = {
            nombre, tel, email
        }
        onConfirm(userData)
    }

}

  return (
    <div className='formulario'>
        <form onSubmit={handleConfirm} className='form'>
            <label className='label'>
                Nombre
                <input
                className='input'
                type='text'
                value={nombre}
                onChange={{{ target }} =>setnombre(target.value)}
                />
            </label>
            <label className='label'>
                TEL
                <input
                className='input'
                type='text'
                value={tel}
                onChange={{{ target }} =>settel(target.value)}
                />
            </label>
            <label className='label'>
                Email
                <input
                className='input'
                type='text'
                value={email}
                onChange={{{ target }} =>setemail(target.value)}
                />
            </label>
            <div className='label'>
                <button type='submit' className='btn'>Crear Orden</button>
            </div>

        </form>

    </div>
  )
}
