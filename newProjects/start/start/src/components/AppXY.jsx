import React, { useState } from 'react'
import './appXY.css';

const AppXY = () => {
  const [xyObj, setXyObj] = useState({x: 0, y: 0})

  return (
    <div className='container' onPointerMove={(event) => {
      setXyObj({...xyObj, x:event.clientX, y: event.clientY})
      console.log(event.clientX, event.clientY);
    }}>
      <div className='pointer' 
      style={{transform: `translate(${xyObj.x}px, ${xyObj.y}px)`}}>
      </div>
    </div>
  );
}

export default AppXY