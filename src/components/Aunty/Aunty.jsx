import React, { useContext } from 'react'
import { RIngContext } from '../Grandpa/GrandPa';

const Aunty = ({house}) => {
  const ring = useContext(RIngContext);
  return (
    <div>
      <h4>Aunty</h4>
      <small>House- {house}</small>
      <p>{ring}</p>

    </div>
  )
}

export default Aunty
