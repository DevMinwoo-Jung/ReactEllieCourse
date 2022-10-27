import { useState } from 'react';


const LoadingError = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handler = () => {
    setValue((prev) => !prev);
  }
  
  return [value, handler];
}

export default LoadingError;