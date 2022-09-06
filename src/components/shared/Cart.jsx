import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartItem from '../cart/CartItem'

const Cart = () => {

    const [cartItems, setCartItems] = useState()

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, config)
            .then(res => setCartItems(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(cartItems)

    return (
        <section>
            <CartItem />
        </section>
    )
}

export default Cart