import React, { useState } from 'react'
import Products from './Products';

const AppProducts = () => {
  const [showProducs, setShowProducts] = useState(true);
  return (
    <div>
      {showProducs && <Products/>}
      <button onClick={() => setShowProducts((prev) => !prev)}>Toggle</button>
    </div>
  )
}

export default AppProducts