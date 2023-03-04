import React from 'react'

const Cart = ({cart, handleRemove}) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <h3>Items Ordered: {cart.length}</h3>
      {
        cart.map(ts => <li key={ts._id}>{ts.name}
          <button onClick={() => handleRemove(ts)}>X</button>
          </li> 
        )
      }
    </div>
  )
}

export default Cart
