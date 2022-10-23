import React, { FC } from 'react'
import RemoveButton from './RemoveButton';

export interface dataType {
  isComplete: string,
  title: string,
  key: number,
}

interface ItemType {
  data: dataType,
  onRemoveTodo: (param: number) => void
}

const Item:FC<ItemType> = ({data, onRemoveTodo}) => {
  const { isComplete ,title, key } = data;

  const removeTodo = () => {
    onRemoveTodo(key);
    console.log(key);
  }

  return (
    <div key={key}>
      <span>{isComplete}</span>
      <span>{title}</span>
      <RemoveButton removeTodo={removeTodo}/>
    </div>
  )
}

export default Item