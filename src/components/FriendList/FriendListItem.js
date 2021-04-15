import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </>
);
FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
