import React from 'react'
import Aunty from '../Aunty/Aunty'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

const GrandPa = () => {
    const house = 7;
    const ring = 'Gold';
  return (
    <div className='grandpa'>
      <h1>Grandpa</h1>
      <section className='flex'>
      <Father house={house} ring={ring}></Father>
      <Uncle house={house}></Uncle>
      <Aunty house={house}></Aunty>
      </section>
    </div>
  )
}

export default GrandPa
