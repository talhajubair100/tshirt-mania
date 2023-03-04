import React, { createContext, useState } from 'react'
import Aunty from '../Aunty/Aunty'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

export const RIngContext = createContext("Golden Ring");
export const MoneyContext = createContext("Money");

const GrandPa = () => {
    const [house, setHouse] = useState(11);
    const [money , setMoney] = useState(100);
    
  return (
    <RIngContext.Provider value={[house, setHouse]}>
    <MoneyContext.Provider value={[money, setMoney]}>
    <div className='grandpa'>
      <h1>Grandpa</h1>
      <section className='flex'>
      <Father house={house}></Father>
      <Uncle house={house}></Uncle>
      <Aunty house={house}></Aunty>
      </section>
    </div>
    </MoneyContext.Provider>
    </RIngContext.Provider>
  )
}

export default GrandPa
