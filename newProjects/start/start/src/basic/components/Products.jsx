import React, { useEffect, useState } from 'react'
import LoadingError from '../../components/LoadingError';

const Products = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = LoadingError(true);
  const [isError, setIsError] = LoadingError(false);

  const handleChange = () => {
    setChecked((prev) => !prev)
  }
  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
      fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('------get Data-----');
        setIsLoading();
        setProducts(data);
      })
      .catch(() => {
        setIsError()
      })
      return () => {
        console.log('-------Unmount------');
      };
  }, [checked]);

  if(isLoading) return <p>로딩중입니다</p>

  if(isError) return <p>에러발생</p>

  return (
    <div>
      <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">show only hot sale 🔥</label>
      {
          <>
          <ul>
          {products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul><button onClick={handleCount}>{count}</button>
        </>
      }
    </div>
  )
}

export default Products