'use clinet';
import { useState } from 'react'

export default function counter() {

  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> setCount((count) => count + 1)}>증가시키기</button>
    </div>
  )
}
