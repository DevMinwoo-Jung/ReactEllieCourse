import React, { FC } from 'react'
import RemoveButton from './RemoveButton';

export interface dataType {
  isComplete: string,
  title: string,
}

interface ItemType {
  data: dataType,
  onRemoveTodo: (param: number) => void,
  onChangeStatus: (key:number) => void,
  parentKey: number,
}

const Item:FC<ItemType> = ({parentKey, data, onRemoveTodo, onChangeStatus}) => {
  const { isComplete ,title } = data;
  const removeTodo = () => {
    onRemoveTodo(parentKey);
    console.log(parentKey);
  }

  const doChangeStatus = () => {
    onChangeStatus(parentKey);
    console.log(parentKey);
  }

  return (
    <div>
      <button onClick={doChangeStatus}>완료했슈</button>
      <span>{isComplete}</span>
      <span>{title}</span>
      <RemoveButton removeTodo={removeTodo}/>
    </div>
  )
}

export default Item