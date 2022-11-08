import React, { useEffect, useState } from 'react'

const Products = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    fetch(`data/products.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log('------get Data-----');
      setProducts(data);
    });
    return () => {
      console.log('-------Unmount------');
    };
  }, []);


  return (
    <div>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))
        }
      </ul>
      <button onClick={handleCount}>{count}</button>
    </div>
  )
}

export default Products