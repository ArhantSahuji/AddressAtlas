// src/App.jsx
import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="App">
      {selectedProfile ? (
        <ProfileDetails profile={selectedProfile} />
      ) : (
        <ProfileList onProfileSelect={handleProfileSelect} />
      )}
    </div>
  );
};

export default App;