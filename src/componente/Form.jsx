import React, { useState } from 'react'


export const Form = (valorInicial) => {
const [form, setForm] = useState(valorInicial)
const handleInputChange = ({ target }) => {
    const {value, name} = target
    setForm({
        ...form,
        [name] : value
    })
}

}
