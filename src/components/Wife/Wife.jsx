import React, { useContext } from 'react'
import { RIngContext } from '../Grandpa/GrandPa';

const Wife = () => {
  const [house, setHouse] = useContext(RIngContext);
  return (
    <div>
      <p>My Wife</p>
      <p>{house}</p>
      <button onClick={() => setHouse(house + 1)}>Increase House</button>
    </div>
  )
}

export default Wife
 