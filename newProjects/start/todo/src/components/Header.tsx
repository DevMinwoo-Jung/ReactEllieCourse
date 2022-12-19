import React, { FC } from 'react'

interface HeaderType {
  setFilter: (e: any) => void,
}

const Header:FC<HeaderType> = ({setFilter}) => {

  const onFilter = (e: any) => {
    setFilter(e)
  }

  return (
    <div onClick={onFilter}>
      <span>ALL</span >
      <span>Done</span >
      <span>Active</span>
    </div>
  )
}

export default Header