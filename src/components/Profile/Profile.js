// import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

const Profile = ({
  name,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" width="72" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImg,
  location: 'location unknown',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
