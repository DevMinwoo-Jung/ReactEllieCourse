import React, { useEffect, useState } from 'react';
import Header from './Header';
import Input from './Input';
import InputForm from './InputForm';
import List from './List';

const Main = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('./mock/todo.json')
    .then((res) => res.json())
    .then((data) => {
      setTodos(data);
    })
    .catch(() => {
      console.error('에러났슈')
    })
    return () => {
    };
}, []);

const removeTodos = (e) => {
  setTodos([...todos].filter((element) => element.key !== e))
}

const addTodos = (e) => {
  setTodos((prev) => [...prev, e])
}

  return (
    <div>
      <Header/>
        <List list={todos} key={Math.random()} removeTodos={removeTodos}/>
        <InputForm addTodos={addTodos}/>
      <Input/>
    </div>
  )
}

export default Main