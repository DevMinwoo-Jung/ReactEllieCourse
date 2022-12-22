import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';

const TodoLst = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: '장보기', status: 'active'},
    { id: uuidv4(), text: '공부하기', status: 'active'},
  ]);

  const hadleAdd = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  const handleUpdate = (updated) => {
    setTodos((todos.map((t) => t.id === updated.id ? updated : t)));
  }

  const handleDelete = (id) => {
    setTodos((todos).filter((item) => item.id !== id));
  }

  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
          ))
        }
      </ul>
      <AddTodo onAdd={hadleAdd}/>
    </section>
  )
}

export default TodoLst