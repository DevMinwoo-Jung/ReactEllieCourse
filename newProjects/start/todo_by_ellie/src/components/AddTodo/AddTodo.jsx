import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChnage = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      alert('빈값은 안되용~');
      return;
    }
    onAdd({
      id: uuidv4(),
      text,
      status: 'active'
    });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add Todo' 
        onChange={handleChnage} value={text}/>
      <button>ADd</button>
    </form>
  )
}

export default AddTodo