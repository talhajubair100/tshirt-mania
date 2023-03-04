import React from 'react'
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddtoCart}) => {
    const {name, price, picture, _id} = tshirt;
  return (
    <div className='tshirt'>
      <h2>T-shirts- {name}</h2>
        <h3>Price: {price}</h3>
        <img src={picture} alt="" />
        <button onClick={() => handleAddtoCart(tshirt)}>Add</button>
    </div>
  )
}

export default Tshirt
