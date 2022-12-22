import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({todo, onUpdate, onDelete}) => {
  const { text, status, id } = todo;
  
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <input type="checkbox" id="checkbox" checked={status === 'completed'} onChange={handleChange}/>
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}><FaTrashAlt/></button>
    </li>
  )
}

export default Todo