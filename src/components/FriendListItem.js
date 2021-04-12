import React from 'react';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </>
);

export default FriendListItem;
