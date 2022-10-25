import React, { useEffect, useState } from 'react'
import Item from './Item';

const List = () => {
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
      {
        todos.map((element:any) => {
          return <Item data={element}/>
        })
      }
    </div>
  )
}

export default List