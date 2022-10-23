import React, { FC } from 'react'

interface RemoveButtonType {
  removeTodo: () => any,
} 

const RemoveButton:FC<RemoveButtonType> = ({removeTodo}) => {

  const setRemoveTodo = () => {
    removeTodo()
  }
  return (
    <button onClick={setRemoveTodo}>
      지울거에용
    </button>
  )
}

export default RemoveButton