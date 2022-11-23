import React from 'react';
import './style.css'

const UserCard = ({user}) => {
    const imageUrl = `https://avatars.dicebear.com/api/male/${user.name}.svg`
  return (
    <div className='userCard_Wrapper'>
        <img src={imageUrl} alt="user-avatar" className='user_avatar' />
        <div className='user_details'>
            <div>
                <span>Name:</span>
                <span>{user.name}</span>
            </div>
            <div>
                <span>Username:</span>
                <span>{user.username}</span>
            </div>
            <div>
                <span>Email:</span>
                <span>{user.email}</span>
            </div>
            <div>
                <span>Website:</span>
                <span>{user.website}</span>
            </div>
        </div>
    </div>
  )
}

export default UserCard