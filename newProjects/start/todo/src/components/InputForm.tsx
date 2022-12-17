import React, { useState } from 'react'

const InputForm = () => {
  const [addTodo, setAddTodo] = useState<string>('');
  
  const onChnageTodo = (e:any) => {
    setAddTodo(e.target.value);
  }

  return (
    <div>
      <form >
        <input type="text" value={addTodo} onChange={onChnageTodo}/>
      </form>
    </div>
  )
}

export default InputForm