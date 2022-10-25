import React, { FC } from 'react'

interface dataType {
  isComplete: boolean,
  title: string,
}

interface ItemType {
  data: dataType
}

const Item:FC<ItemType> = ({data}) => {
  const { isComplete ,title } = data;

  return (
    <div>
      <span>{isComplete}</span>
      <span>{title}</span>
    </div>
  )
}

export default Item