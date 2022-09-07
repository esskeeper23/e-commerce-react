import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import CartItem from '../cart/CartItem'

const Cart = () => {

  const [cartItems, setCartItems] = useState()

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
      .then()
      .catch(err => console.log(err))
  }

  return (
    <div>

      {
      cartItems?.products.map(product => (
          <CartItem 
          key={product.id}
          cartItems={product}
          getAllProducts={getAllProducts}
      />
      ))
      }

      <button onClick={handleCheckout} style={{marginTop: '80px'}}>checkout</button>
    </div>
  )
}

export default Cart