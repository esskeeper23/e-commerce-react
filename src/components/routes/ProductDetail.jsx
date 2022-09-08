import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/productDescription'
import ProductGallery from '../productDetail/ProductGallery'
import SimilarProducts from '../productDetail/SimilarProducts'
import './styles/productDetail.css'


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
    <div className='product-detail__container'>

      <section className='product-detail'>
        <ProductGallery 
          productGallery={productInfo}
        />

        <ProductDescription 
          productInfo={productInfo}
        />
      </section>

      <div className='product-detail__similar-products'>
        <SimilarProducts 
          productInfo={productInfo}
        />
      </div>

    </div>
  )
}

export default ProductDetail