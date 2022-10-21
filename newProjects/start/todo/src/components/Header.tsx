import React, { FC } from 'react'

interface HeaderType {
  setFilter: (e: any) => void,
}

const Header:FC<HeaderType> = ({setFilter}) => {

  const onFilter = (e: any) => {
    setFilter(e)
  }

  return (
    <div className='w-full font-bold text-lg' onClick={onFilter}>
      <span className="mr-3 cursor-pointer">ALL</span >
      <span className="mr-3 cursor-pointer">Done</span >
      <span className="mr-3 cursor-pointer">Active</span>
    </div>
  )
}

export default Header