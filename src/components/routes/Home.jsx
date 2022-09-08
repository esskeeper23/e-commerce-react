import React from 'react'
import { useSelector } from "react-redux";
import CardHome from "../home/CardHome"

const Home = () => {

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