import React from 'react'
import './appProfileCss.css'
import Avatar from './Avatar';

const AppProfile = ({ profileInfo }) => {

  const { name, position, profileUrl, isNew } = profileInfo;

  return (
    <div className='profileRoot'>

      <div className='infoText'>
        {
          profileUrl !== ''
          && profileUrl !== null
          && profileUrl !== undefined
          ? <Avatar profileUrl={profileUrl} isNew={isNew} key={profileUrl}/>
          : ''
        }
        <p>name: {name} </p>
        <p>position: {position}</p>
      </div>
    </div>
  )
} 

export default AppProfile