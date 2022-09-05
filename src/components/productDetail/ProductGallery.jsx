import React from 'react'
import './styles/productGallery.css'

const ProductGalery = ({productGallery}) => {

  return (
    <div className='product-gallery'>
      <div className='product-gallery__circle'>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <img src={productGallery?.productImgs} alt="" />
      <div className='product-gallery__circle'>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default ProductGalery