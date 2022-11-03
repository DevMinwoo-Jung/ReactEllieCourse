
import React, { useState } from 'react'
const AppMentor = () => {
  const [person, setPerson] = useState({
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
  })

  const changePerson = () => {
    const name = prompt('누구를 바꾸고 싶어용');
    const isExist = person.mentor.filter((element) => element.name === name);
    console.log(isExist);
    if(isExist.length === 0) {
      return alert('존재하지 않는디');
    }
    const nameIndex = person.mentor.map((element) => element.name).findIndex((element) => element === name);
    const changeName = prompt('뭘로 바꾸고 싶어용');

    // setPerson({...person,
    //     mentor:
    //     [
    //       ...person.mentor,
    //       {
    //         ...person.mentor[nameIndex].name = changeName
    //       }
    //     ]  
    //   });

    // 다 바꾸는 버전
    setPerson({...person,
        mentor: person.mentor.map((element) => {
          if(element.name === name) {
            return {...element, name: changeName}
          }
          return element;
        })
      });
      
  }

  const addMentor = () => {
    const name = prompt('이름');
    const title = prompt('타이틀');
    setPerson({
      ...person,
      mentor: [...person.mentor, {name, title}]
    })
  };

  const removeMentor = () => {
    const name = prompt('이름');
    setPerson({
      ...person,
      mentor: [...person.mentor.filter((mentor) => mentor.name !== name)]
    })
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

export default AppMentor