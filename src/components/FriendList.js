import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <FriendListItem
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      </li>
    ))}
  </ul>
);

export default FriendList;
