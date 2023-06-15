'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const GoProductsBtn = () => {
  const router = useRouter();
  
  return (
    <button onClick={() => {
        router.push('/products')
    }}>Go to Products</button>
  )
}

export default GoProductsBtn