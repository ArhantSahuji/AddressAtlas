// src/components/ProfileDetails.jsx
import React from 'react';
import MapComponent from './MapComponent';

const ProfileDetails = ({ profile }) => {
    // console.log("hiiiii");
    console.log(profile.address.lat);
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} style={{ width: '150px', height: '150px' }}/>
      <p>{profile.description}</p>
      <MapComponent lat={profile.address.lat} lng={profile.address.lng} />
    </div>
  );
};

export default ProfileDetails;