export default function personReducer(person, action) {
  switch (action.type) {
    case 'update' : {
      const { prev, current } = action;
      return {...person,
        mentor: person.mentor.map((element) => {
          if(element.name === prev) {
            return {...element, name: current}
          }
          return element;
        })
      }
    }
    case 'add' : {
      const { name, title } = action;
      return {
        ...person,
        mentor: [...person.mentor, {name, title}]
        }
    }
    case 'delete' : {
      const { name } = action
      return {
        ...person,
        mentor: [...person.mentor.filter((mentor) => mentor.name !== name)]
        }
    }
    default : {
      throw new Error (`에러 발생: ${action.type} 존재하지 않는 action입니다.`)
    }
  }
}