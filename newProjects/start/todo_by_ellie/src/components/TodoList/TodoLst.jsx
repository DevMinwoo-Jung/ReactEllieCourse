import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'

const TodoLst = () => {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active'},
    { id: '1234', text: '공부하기', status: 'active'},
  ]);

  const hadleAdd = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
      <AddTodo onAdd={hadleAdd}/>
    </section>
  )
}

export default TodoLst