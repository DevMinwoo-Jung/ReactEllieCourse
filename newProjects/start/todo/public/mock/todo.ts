export const data: todoData = {
  0:{
    isComplete: false,
    title: '밥먹기',
  },
  1:{
    isComplete: true,
    title: '공부하기',
  },
  2:{
    isComplete: true,
    title: '리액트',
  },
  3:{
    isComplete: true,
    title: '타입스크립트',
  },
  4:{
    isComplete: true,
    title: '자바스크립트',
  },
}

interface todoData {
  [key: number] :{
    isComplete: boolean,
    title: string
  }
}