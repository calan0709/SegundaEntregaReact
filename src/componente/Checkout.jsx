import { Timestamp, writeBatch } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'


export const Checkout = () => {
const [Loading, setLoading] = useState(false)
const [orderid, setOrderid] = useState('')

const createOrder = async ({nombre, tel, email}) =>{
    setLoading(true)
try{
    const obOrder={
        buyer:{nombre, tel, email},
        items:cart,
        total:total,
        date: Timestamp.fromDate(new Data())
    }
    const betch = writeBatch(db)
    const outOfstock = []
}
}

if(Loading) { return <h1>Se esta generando su orden...</h1>}
if(orderid) { return <h1>El id de tu orden es : </h1>}

  return (
    <div>
        <h1>Pedido</h1>
        <CheckoutForm onConfirm = {createOrder}/>

    </div>
  )
}
