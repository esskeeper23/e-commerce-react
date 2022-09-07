import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import CartItem from '../cart/CartItem'
import './styles/cart.css'

const Cart = ({isCartOpen, closeCart}) => {

    const [cartItems, setCartItems] = useState()
    const [total, setTotal] = useState()

    const getAllProducts = () => {
        getConfig()

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => setCartItems(res.data.data.cart))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    console.log(cartItems)

    return (
        <section className={isCartOpen ? 'shopping-cart' : 'hide-cart'}>
            <h4 className='shopping-cart__title'>Shopping cart</h4>
            <div className='shopping-cart__cart-item-container'>
                {
                    cartItems?.products.map(product => (
                        <CartItem 
                        key={product.id}
                        cartItems={product}
                        getAllProducts={getAllProducts}
                    />
                    ))
                }
            </div>
            <footer className='shopping-cart_checkout'>
                <div className='shopping-cart__total-container'>
                    <span className='shopping-cart__total'>Total:</span>
                    <b className='shopping-cart__total-price'>$ 2449</b>
                </div>
                <NavLink to='/cart'>
                    <button onClick={closeCart} className='shopping-cart_checkout-btn'>Checkout</button>
                </NavLink>
            </footer>
        </section>
    )
}

export default Cart