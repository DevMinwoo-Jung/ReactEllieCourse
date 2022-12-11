
import React, { useReducer } from 'react'
import personReducer from '../reducer/person-reducer';
const AppMentor = () => {
  // const [person, setPerson] = useState(initialValue);
  const [person, dispatch] = useReducer(personReducer, initialValue);

  const changePerson = () => {
    const name = prompt('누구를 바꾸고 싶어용');
    const isExist = person.mentor.filter((element) => element.name === name);
    console.log(isExist);
    if(isExist.length === 0) {
      return alert('존재하지 않는디');
    }

    const changeName = prompt('뭘로 바꾸고 싶어용');
    dispatch({type:'update', prev:name, current:changeName })
      
  }

  const addMentor = () => {
    const name = prompt('이름');
    const title = prompt('타이틀');
    dispatch({type:'add', name, title })
  };

  const removeMentor = () => {
    const name = prompt('이름');
    dispatch({type:'add', name })
  };

  return (
    <div>
      <div>
        <h1>{person.name}는 {person.title}</h1>
        <p>
          {person.name}의
          {
            person.mentor.map((element, index) => (
              <li key={index}>
                <span>mentor는 {element.name}이고 title은 {element.title}</span>
              </li>
            ))    
          }
        </p>
      </div>
      <button onClick={changePerson}>이름을 뭘로 바꿀거에용</button>
      <button onClick={addMentor}>멘토 추가</button>
      <button onClick={removeMentor}>멘토 삭제</button>
    </div>
  )
}

const initialValue = {
  name: 'minwoo',
  title: 'dev',
  mentor: [
    {
    name: 'bob',
    title: 'senior dev'
    },
    {
    name: 'na',
    title: 'naanana'
    },
    {
    name: 'bob',
    title: 'senior dev'
    },
    {
    name: 'na',
    title: 'naanana'
    },
    {
    name: 'bob',
    title: 'senior dev'
    },
    {
    name: 'na',
    title: 'naanana'
    }      
],
}

export default AppMentor