import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({product}) => {

  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <article onClick={handleClick} className='card-home'>
      <header className='card-home__header'>
        <img src={product.productImgs[0]} alt="" />
      </header>
      <div className='card-home__body'>
        <h3 className='card-home__name'>{product.title}</h3>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>$ {product.price}</h4>
        </section>
      </div>
    </article>
  )
}

export default CardHome