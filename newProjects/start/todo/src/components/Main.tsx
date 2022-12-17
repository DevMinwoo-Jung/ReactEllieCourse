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
      console.log('------get Data-----');
      setTodos(data);
    })
    .catch(() => {
      console.error('에러났슈')
    })
    return () => {
      console.log('-------Unmount------');
    };
}, []);

  return (
    <div>
      <Header/>
        <List list={todos} key={Math.random()}/>
        <InputForm/>
      <Input/>
    </div>
  )
}

export default Main