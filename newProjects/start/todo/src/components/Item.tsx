import { FC } from 'react'
import RemoveButton from './RemoveButton';
import { AiOutlineCheckSquare, AiFillCheckSquare } from 'react-icons/ai';

export interface dataType {
  isComplete: any,
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
      <button onClick={doChangeStatus}>{isComplete === 'true' ? <AiFillCheckSquare/> : <AiOutlineCheckSquare/>}</button>
      <span>{title}</span>
      <RemoveButton removeTodo={removeTodo}/>
    </div>
  )
}

export default Item