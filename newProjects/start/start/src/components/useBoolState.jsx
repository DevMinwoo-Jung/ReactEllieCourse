import { useState } from 'react';


const useBoolState = (boolValue) => {
  const [value, setValue] = useState(boolValue);
  const handler = (value) => {
    setValue(value);
  }
  
  return [value, handler];
}

export default useBoolState;
