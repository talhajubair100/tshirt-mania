import React from 'react'
import Brother from '../Brother/Brother'
import Myself from '../Myself/Myself'
import Sister from '../Sister/Sister'

const Father = ({house}) => {
  return (
    <div>
      <h2>Father Mine </h2>
      <small>House- {house}</small>
      <section className='flex'>
      <Myself house={house}></Myself>
      <Brother house={house}></Brother>
      <Sister house={house}></Sister>
      </section>
    </div>
  )
}

export default Father
