import React, { useState } from 'react'
import './styles/productDescription.css'

const productDescription = ({productInfo}) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)
    const handleMinus = () => {
      if (counter - 1 > 0) {
        setCounter(counter -1)
      }
    }

    console.log(productInfo)
  return (
    <section className='product-description'>

      <h2 className='product-description__name'>{productInfo?.title}</h2>

      <div className='product-description__price-container'>
        <div className='price-container'>
          <p>Price</p>
          <h4 className='product-description__price'>$ {productInfo?.price}</h4>
        </div>
        <div className='product-description__quantity-container'>
          <p>Quantity</p>
          <div className='product-description__quantity'>
            <button onClick={handleMinus} className='product-description__quantity-btn'>-</button>
            <div className='product-description__quantity-counter'>{counter}</div>
            <button onClick={handlePlus} className='product-description__quantity-btn'>+</button>
          </div>
        </div>
      </div>

      <button className='product-description__add-btn'>Add to cart</button>

      <article>{productInfo?.description}</article>
    </section>
  )
}

export default productDescription
