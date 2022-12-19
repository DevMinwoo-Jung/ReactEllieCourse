import React, { useEffect, useState } from 'react';
import Header from './Header';
import Input from './Input';
import InputForm from './InputForm';
import List from './List';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [origin, setOrigin] = useState([]);
  
  useEffect(() => {
    fetch('./mock/todo.json')
    .then((res) => res.json())
    .then((data) => {
      setTodos(data);
      setOrigin(data);
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

const changeStatus = (e) => {
  console.log(e)
  // setTodos((prev) => [...prev, {...prev}])
}

const setFilter = (e) => {
  if(e.target.innerText === "Active") {
    setTodos([...origin.filter((todo) => todo.isComplete === "false")])
  } else if(e.target.innerText === "Done") {
    setTodos([...origin.filter((todo) => todo.isComplete === "true")])
  } else {
    setTodos([...origin]);
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