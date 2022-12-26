import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';

const TodoLst = ({ filter }) => {
  const [todos, setTodos] = useState(readTodoFromLocalStorage);
  // const [todos, setTodos] = useState(() => readTodoFromLocalStorage());
  // 딱 한번만 호출하고 싶다면... 근데 이게 잘 이해가 안가네

  const hadleAdd = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleUpdate = (updated) => {
    setTodos((todos.map((t) => t.id === updated.id ? updated : t)));
  }

  const handleDelete = (id) => {
    setTodos((todos).filter((item) => item.id !== id));
  }

  const filtered = getFilteredItems(todos, filter)

  return (
    <section>
      <ul>
        {
          filtered.map((item) => (
            <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
          ))
        }
      </ul>
      <AddTodo onAdd={hadleAdd}/>
    </section>
  )
}

export default TodoLst

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  } else {
    return todos = todos.filter((item) => item.status === filter)
  }
}

function readTodoFromLocalStorage() {
  console.log('');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}