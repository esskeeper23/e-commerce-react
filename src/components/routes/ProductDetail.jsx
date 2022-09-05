import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/productDescription'
import ProductGallery from '../productDetail/ProductGallery'

const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {

    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      <ProductGallery 
        productGallery={productInfo}
      />

      <ProductDescription 
        productInfo={productInfo}
      />
    </div>
  )
}

export default ProductDetail