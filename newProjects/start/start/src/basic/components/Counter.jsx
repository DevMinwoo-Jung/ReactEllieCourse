import React, { useState } from 'react'

const Counter = ({ addTotalCount, totalCount }) => {
  const [number, setNumber] = useState(0);
  //prev!
  const addNumber = () => {
    setNumber((prev) => prev + 1);
    addTotalCount();
  }
   
  return (
    <div className='counter'>
      <span className='number'>{number}/{totalCount}</span>
      <button className='button' onClick={addNumber}>add</button>
    </div>
  )
}

export default Counter 