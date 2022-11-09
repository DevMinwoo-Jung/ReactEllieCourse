import React from 'react';
import './avatar.css';

const Avatar = ({ profileUrl, isNew }) => {

  return (
    <div className='profileImgDiv'>
    <img className='devImg' src={profileUrl} alt="" />
      {
        isNew 
        ? <span className='isNew'>New!</span>
        : ''
      }
  </div>
  )
}

export default Avatar