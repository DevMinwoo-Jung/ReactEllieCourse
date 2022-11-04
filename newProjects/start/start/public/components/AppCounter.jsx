import React, { useState } from 'react'
import Counter from './Counter'

const AppCounter = () => {
  const [totalCount, setTotalCount] = useState(0);

  const addTotalCount = () => {
    setTotalCount((prev) => prev + 1)
  }

  return (
    <div>
      <span>totalCount: {totalCount} {totalCount > 10 ? `😍` : `😀`}</span>
      <Counter totalCount={totalCount} addTotalCount={addTotalCount}/> 
      <Counter totalCount={totalCount} addTotalCount={addTotalCount}/>
    </div>
  )
}

export default AppCounter