import React, { useEffect, useState } from 'react';
import Header from './Header';
import Input from './Input';
import InputForm from './InputForm';
import List from './List';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState('ALL');
  
  useEffect(() => {
      fetch('./mock/todo.json')
      .then((res) => res.json())
      .then((data) => {
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
  setTodos([...todos].filter((element) => element.key !== e))
}

const addTodos = (e) => {
  setTodos((prev) => [...prev, e])
}

const changeStatus = (e) => {
  console.log(e)
  // setTodos((prev) => [...prev, {...prev}])
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
    <div>
      <Header setFilter={setFilter}/>
        <List changeStatus={changeStatus} list={todos} key={Math.random()} removeTodos={removeTodos}/>
        <InputForm addTodos={addTodos}/>
      <Input/>
    </div>
  )
}

export default Main