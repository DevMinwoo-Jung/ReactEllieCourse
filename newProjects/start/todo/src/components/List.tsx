import React, { FC } from 'react'
import Item from './Item';

interface Todo {
  list: Object[]
}

const List:FC<Todo> = ({list}) => {

  const data = list;

  return (
    <div>
      {
        data.map((element:any) => {
          return <Item data={element} key={Math.random()}/>
        })
      }
    </div>
  )
}

export default List