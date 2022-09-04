import React, { useState } from 'react'

const productDescription = ({productInfo}) => {

    const [counter, setCounter] = useState(1)

    console.log(productInfo)
  return (
    <section>
        <h2>{productInfo?.title}</h2>

    </section>
  )
}

export default productDescription
