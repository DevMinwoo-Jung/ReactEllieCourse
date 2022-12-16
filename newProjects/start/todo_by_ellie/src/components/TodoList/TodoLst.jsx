import React, { useState } from 'react'

const TodoLst = () => {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active'},
    { id: '123', text: '공부하기', status: 'active'},
  ])
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default TodoLst