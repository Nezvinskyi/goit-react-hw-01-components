import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
        <FriendListItem
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      </li>
    ))}
  </ul>
);

// FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

export default FriendList;
