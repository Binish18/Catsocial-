import React from 'react'
import './closeFriend.css'

const CloseFriend = ({user}) => {
  return (
    <li>
    <img className='sidebarFriendImg' src={user.profilePicture} alt='yo'/>
    <span className='sidebarFriendName'>{user.username}</span>
 </li> 
  )
}

export default CloseFriend