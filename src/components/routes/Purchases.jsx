import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchasesCard from '../purchases/PurchasesCard'
import getConfig from '../../utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {
  const [purchases, setPurchases] = useState()

  useEffect(() => {

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      axios.get(URL, getConfig())
        .then(res => setPurchases(res.data.data.purchases))
        .catch()
  }, [])
  return (
    <div className='purchases-container'>
      <h2>Your orders</h2>
      {
        purchases?.map(purchase => (
          <PurchasesCard 
            key={purchase.id}
            purchase={purchase}
          />
        ))
      }
    </div>
  )
}

export default Purchases