import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;
