import React from 'react'

const Header = ({filters, filter, onFilterChange}) => {
  return (
    <ul>
      {
        filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))
      }
    </ul>
  )
}

export default Header