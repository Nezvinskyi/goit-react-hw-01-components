import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
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
