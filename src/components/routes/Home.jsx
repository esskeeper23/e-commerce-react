import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from "../home/CardHome"

const Home = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {

    dispatch(getAllProducts())

  }, [])

  const products = useSelector(state => state.products)
  
  return (
    <div>
      <div className='card-home-container'>
        {
          products?.map(product => (
            <CardHome
            key={product.id}
            product={product}
             />
          ))
        }
      </div>
    </div>
  )
}

export default Home