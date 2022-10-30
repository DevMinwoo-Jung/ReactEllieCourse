import React, { useState } from 'react';
import { useImmer } from 'use-immer';


const AppForm = () => {
  const [form, updateForm] = useImmer(initialForm);
  const [formState, setFormState] = useState(initialForm);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // name은 input의 name!
  //   updateForm((form) => {
  //     form[name] = value
  //   })
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]:value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.name, form.email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" name='name' onChange={handleChange} value={formState.name}/>
        <label htmlFor="email">email</label>
        <input type="email" id="email" name='email' onChange={handleChange} value={formState.email}/>
        <button>제출하기</button>
      </form>
      <h1>제출하신 이름은 {formState.name}</h1>
      <h1>제출하신 이메일은 {formState.email}</h1>
    </>
  )
}

const initialForm = {
  name: '',
  email: '',
}

export default AppForm