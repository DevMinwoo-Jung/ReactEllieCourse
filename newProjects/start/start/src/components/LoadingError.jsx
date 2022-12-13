import { useState } from 'react';


const LoadingError = (boolValue) => {
  const param = boolValue;
  const [value, setValue] = useState(param);
  const handler = (value) => {
    setValue(value);
  }
  
  return [value, handler];
}

export default LoadingError;