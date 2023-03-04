import React from 'react'
import Wife from '../Wife/Wife'

const Myself = ({house, ring}) => {
  return (
    <div>
      <p>My Self {house}</p>
      <Wife ring={ring}></Wife>
    </div>
  )
}

export default Myself
