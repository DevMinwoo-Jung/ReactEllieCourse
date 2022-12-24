import React from 'react'
import { useDarkMode } from '../contetxt/DarkModeContext'
import { HiMoon, HiSun } from 'react-icons/hi';

const Header = ({filters, filter, onFilterChange}) => {
  const {darkMode, toggleDarkMode} = useDarkMode();


  return (
    <header>
      <button onClick={toggleDarkMode}>
        {darkMode ? <HiMoon/> : <HiSun/>}
      </button>
      <ul>
        {
          filters.map((value, index) => (
            <li key={index}>
              <button onClick={() => onFilterChange(value)}>{value}</button>
            </li>
          ))
        }
      </ul>
    </header>
  )
}

export default Header