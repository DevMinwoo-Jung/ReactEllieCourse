import { FC, useState } from 'react';
import { dataType } from './Item';

interface InputFormType {
  addTodos: (e:dataType) => any;
}

const InputForm:FC<InputFormType> = ({addTodos}) => {
  const [addTodo, setAddTodo] = useState<string>('');
  
  const onChnageTodo = (e:any) => {
    setAddTodo(e.target.value);
  }

  const onAddTodos = (e:any) => {
    e.preventDefault();
    addTodos({
      "isComplete": "false",
      "title": `${addTodo}`,
    });
    setAddTodo('');
  }

  return (
    <>
      <form onSubmit={onAddTodos}>
        <input type="text" value={addTodo} onChange={onChnageTodo}/>
      </form>
    </>
  )
}

export default InputForm