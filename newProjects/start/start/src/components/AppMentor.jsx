import React, { useState } from 'react'

const AppMentor = () => {
  const [person, setPerson] = useState({
    name: 'minwoo',
    title: 'dev',
    mentor: {
      name: 'bob',
      title: 'senior dev'
    },
  })

  const changePerson = () => {
    const name = prompt('바꿀 이름은');
    const title = prompt('바꿀 title은');
    setPerson({...person, name: name, title: title})
  }

  const changeMentor = () => {
    const name = prompt('바꿀 멘토는');
    const title = prompt('바꿀 title은');
    console.log({...person.mentor});
    setPerson(
      {
        ...person 
      ,mentor: {...person.mentor, name: name, title: title}
    }  
    )
  }

  return (
    <div>
      <div>
        <h1>{person.name}는 {person.title}</h1>
        <p>
        {person.name}의 mentor는 {person.mentor.name}이고 title은 {person.mentor.title}
        </p>
      </div>
      <button onClick={changePerson}>사람 바꾸기</button>
      <button onClick={changeMentor}>멘토 바꾸기</button>
    </div>
  )
}

export default AppMentor