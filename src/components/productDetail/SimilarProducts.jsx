import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import './styles/similarProducts.css'

const SimilarProducts = ({productInfo}) => {

  const [filterProducts, setFilterProducts] = useState()

  const products = useSelector(state => state.products)

  useEffect(() => {
    if(productInfo){
      const filter = products?.filter(e => e.category.name === productInfo?.category)
      setFilterProducts(filter)
    }
  }, [productInfo])

  return (
    <div className='container-similar-products'>
      <h3 className='similar-product__title'>Discover similar items</h3>
      <div className='similar-products'>
        {
          filterProducts?.map(product => {
            if(product.title !== productInfo.title){
              return <CardHome 
                key={product.id}
                product={product}
              />
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts