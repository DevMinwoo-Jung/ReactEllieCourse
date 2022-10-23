import React, { FC } from 'react'
import Item from './Item';

interface Todo {
  list: Object[],
  removeTodos: (pram: number) => void,
}

const List:FC<Todo> = ({list, removeTodos}) => {

  const data = list;

  const onRemoveTodo = (e:any) => {
    console.log(e);
    removeTodos(e);
  }

  return (
    <div>
      {
        data.map((element:any) => {
          return <Item data={element} key={element.key} onRemoveTodo={onRemoveTodo}/>
        })
      }
    </div>
  )
}

export default List