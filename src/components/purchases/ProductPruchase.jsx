import React from 'react'
import './styles/productPurchase.css'

const ProductPruchase = ({product}) => {
  return (
    <li className='product'>
        <h4 className='product-title'>{product.title}</h4>
        <div className='product-container'>
          <div className='product-quantity'>{product.productsInCart.quantity}</div>
          <p className='porduct-price'>{product.price}</p>
        </div>
    </li>
  )
}

export default ProductPruchase