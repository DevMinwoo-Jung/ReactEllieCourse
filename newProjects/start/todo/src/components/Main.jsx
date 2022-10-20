import React, { useEffect, useState } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import List from './List';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState('ALL');
  
  useEffect(() => {
      fetch('./mock/todo.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(todosFilter === 'ALL'){
          setTodos(data);
        } else if (todosFilter === 'Active') {
          setTodos([...data.filter((todo) => todo.isComplete === "false")])
        } else if (todosFilter === 'Done') {
          setTodos([...data.filter((todo) => todo.isComplete === "true")])
        }
      })
      .catch(() => {
        console.error('에러났슈')
      })
      return () => {
      };
}, [todosFilter]);

const removeTodos = (e) => {
  setTodos([...todos].filter((element, index) => index !== e));
}

const addTodos = (e) => {
  setTodos((prev) => [...prev, e])
}

const changeStatus = (e) => {
  console.log(e);
  console.log(todos[e].isComplete)
  setTodos([...todos], 
    todos[e].isComplete === 'true' 
    ? todos[e].isComplete = 'false' 
    : todos[e].isComplete = 'true');
}

const setFilter = (e) => {
  if(e.target.innerText === "Active") {
    setTodosFilter("Active");
  } else if(e.target.innerText === "Done") {
    setTodosFilter("Done");
  } else {
    setTodosFilter("ALL");
  }
}

  return (
    <div className='m-auto border h-80 w-1/2 absolute top-1/3	left-2/4 -translate-y-2/4 -translate-x-2/4'>
      <Header setFilter={setFilter}/>
        <List changeStatus={changeStatus} list={todos} key={Math.random()} removeTodos={removeTodos}/>
        <InputForm addTodos={addTodos}/>
    </div>
  )
}

export default Main