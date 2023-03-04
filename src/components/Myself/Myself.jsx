import React, { useContext } from 'react'
import Wife from '../Wife/Wife'
import { MoneyContext } from '../Grandpa/GrandPa';

const Myself = ({house}) => {
  const [money , setMoney] = useContext(MoneyContext);
  return (
    <div>
      <p>My Self {house}</p>
      <p>{money}</p>
      <button onClick={() => setMoney(money + 10)}>Give Money</button>
      <Wife></Wife>
    </div>
  )
}

export default Myself
