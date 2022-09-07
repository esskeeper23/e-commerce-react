import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import './styles/cartItem.css'

const CartItem = ({cartItems, getAllProducts}) => {

  const handleDelete = () => {

    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${cartItems.id}`
    axios.delete(URL, getConfig())
      .then(getAllProducts())
      .catch(err => console.log(err))
  }
  return (
    <article className='cart-item__container'>
      <div className='cart-item__info'>
        <div className='cart-item__info-container'>
          <span className='cart-item__brand'>{cartItems.brand}</span>
          <p className='cart-item__model'>{cartItems.title}</p>
          <div className='cart-item__quantity'>{cartItems.productsInCart.quantity}</div>
        </div>
        <div className='cart-item__btn-container'>
          <button onClick={handleDelete} className='cart-item-btn'>x</button>
        </div>
      </div>
      <div className='cart-item__total-container'>
        <span className='cart-item__total'>Total: </span>
        <b className='cart-item__total-price'>$ {cartItems.price}</b>
      </div>
    </article>
  )
}

export default CartItem
