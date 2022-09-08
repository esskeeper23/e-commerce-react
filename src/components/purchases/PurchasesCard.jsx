import axios from 'axios'
import React from 'react'
import ProductPruchase from './ProductPruchase'
import './styles/purchasesCard.css'


const PurchasesCard = ({purchase}) => {

  return (
    <article className='card-purchase'>
        <header className='card-purchase__date-container'>
            <h3>{purchase.createdAt}</h3>
        </header>
        <hr />
        <ul>
            {
                purchase.cart.products.map(product => (
                    <ProductPruchase 
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </ul>
    </article>
  )
}

export default PurchasesCard