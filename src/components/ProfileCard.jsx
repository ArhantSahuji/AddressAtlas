// src/components/ProfileCard.jsx

import React from 'react';
import './ProfileCard.css'; // Import the CSS file for styles

const ProfileCard = ({ profile, onProfileSelect }) => {
  return (
    <div className="profile-card" onClick={() => onProfileSelect(profile)}>
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <div className="profile-info">
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-description">{profile.description}</p>
        <div className="profile-location">
          <span>Location: </span>
          <span>{`${profile.address.lat}, ${profile.address.lng}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;