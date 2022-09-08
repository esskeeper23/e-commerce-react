import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import CartItem from '../cart/CartItem'
import './styles/cart.css'

const Cart = () => {

  const [cartItems, setCartItems] = useState()
  const [total, setTotal] = useState()

  const getAllProducts = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
        .then(res => {
          const products = res.data.data.cart.products
          setCartItems(products)
          const total = products.reduce((acc, cv) => {
            return Number(cv.price) * cv.productsInCart.quantity +acc
          }, 0)
          setTotal(total)
        })
        .catch(err => setCartItems())
  }

  
  useEffect(() => {
    getAllProducts()
  }, [])
  

  const handleCheckout = () => {

    const obj = {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }
  

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.post(URL, obj, getConfig())
      .then(res => {
        getAllProducts()
        setTotal()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='cart'>

      {
      cartItems?.map(product => (
          <CartItem 
          key={product.id}
          cartItems={product}
          getAllProducts={getAllProducts}
      />
      ))
      }


      <div className='cart-total'>
        <p className='total'>Total: </p>
        <b>$ {total}</b>
      </div>
      <div className='cart-btn__container'>
      <button className='cart-btn' onClick={handleCheckout} >checkout</button>
      </div>
    </div>
  )
}

export default Cart