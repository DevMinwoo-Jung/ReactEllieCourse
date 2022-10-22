import React, { FC } from 'react'
import Item from './Item';

interface Todo {
  list: Object[],
  removeTodos: (pram: number) => void,
  changeStatus: (e:any) => void
}

const List:FC<Todo> = ({changeStatus, list, removeTodos}) => {

  const data = [...list];

  const onRemoveTodo = (e:any) => {
    removeTodos(e);
  }

  const onChangeStatus = (e:any) => {
    changeStatus(e)
  }

  return (
    <div>
      {
        data.map((element:any, index) => {
          return <Item onChangeStatus={onChangeStatus} data={element} parentKey={index} key={index} onRemoveTodo={onRemoveTodo}/>
        })
      }
    </div>
  )
}

export default List