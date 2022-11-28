import React from 'react'
import './appProfileCss.css'

const AppProfile = ({ profileInfo }) => {

  const { name, position, isNew, profileUrl } = profileInfo

  return (
    <div className='profileRoot'>
      <img className='devImg' src={profileUrl} alt="" />
      <div className='infoText'>
        <p>name: {name} 
        {
          isNew 
          ? <span className='isNew'>New!</span>
          : ''
        }
        </p>
        <p>position: {position}</p>
      </div>
    </div>
  )
} 

export default AppProfile