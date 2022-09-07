import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/CardHome.css'
import getConfig from '../../utils/getConfig'

const CardHome = ({product}) => {

  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }

    axios.post(URL, obj, getConfig())
      .then()
      .catch()
  }

  return (
    <article onClick={handleClick} className='card-home'>
      <header className='card-home__header'>
        <img src={product.productImgs[0]} alt="" />
      </header>
      <div className='card-home__body'>
        <h3 className='card-home__name'>{product.title}</h3>
        <section className='card-home__price'>
          <div>
            <p>Price</p>
            <h4 className='card-home__price-label'>$ {product.price}</h4>
          </div>
          <div onClick={handleAddToCart} className='card-home__icon-container'>
            <i className="fa-solid fa-cart-shopping card-icon"></i>
          </div>
        </section>
        
      </div>
    </article>
  )
}

export default CardHome