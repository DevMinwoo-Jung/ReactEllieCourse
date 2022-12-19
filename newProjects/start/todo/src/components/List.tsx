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
    console.log(e);
    removeTodos(e);
  }

  const onChangeStatus = (e:any) => {
    changeStatus(e)
  }

  return (
    <div>
      {
        data.map((element:any) => {
          return <div onClick={onChangeStatus}><Item data={element} key={element.key} onRemoveTodo={onRemoveTodo}/></div>
        })
      }
    </div>
  )
}

export default List