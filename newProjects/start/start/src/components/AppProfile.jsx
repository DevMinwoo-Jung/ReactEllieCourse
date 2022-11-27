import React from 'react'
import './appProfileCss.css'

const AppProfile = ({ profileInfo }) => {

  const { name, position, isNew, profileUrl } = profileInfo

  return (
    <div className='profileRoot'>
      <div className='profileImgDiv'>
        <img className='devImg' src={profileUrl} alt="" />
          {
            isNew 
            ? <span className='isNew'>New!</span>
            : ''
          }
      </div>
      <div className='infoText'>
        <p>name: {name} 
        </p>
        <p>position: {position}</p>
      </div>
    </div>
  )
} 

export default AppProfile