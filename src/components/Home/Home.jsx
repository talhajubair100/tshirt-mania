import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Tshirt from '../Tshirt/Tshirt'
import './Home.css'

const Home = () => {
  const tshirts = useLoaderData()
  const [cart, SetCart] = useState([]);
  const handleAddtoCart = tshirt => {
    console.log('tshirt added', tshirt)
    const exist = cart.find(ts => ts._id === tshirt._id);
    if(exist){
      alert('This item is already added to cart');
    }
    else{
      const newCart = [...cart, tshirt];
      SetCart(newCart);
    }
  }
  const handleRemove = tshirt => {
    console.log('tshirt removed', tshirt)
    const remaining = cart.filter(ts => ts._id !== tshirt._id);
    SetCart(remaining);
  }
  return (
    <div className='home-container'>
      <div className="tshirt-container">
      {
        tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddtoCart={handleAddtoCart}></Tshirt>)
      }
    </div>
    <div className="cart">
      <Cart cart={cart} handleRemove={handleRemove}></Cart>
    </div>
    </div>
  )
}

export default Home
