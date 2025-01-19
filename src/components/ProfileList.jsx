// src/components/ProfileList.jsx
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ onProfileSelect }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Mock profile data
  const mockProfiles = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Software Developer',
      photo: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/77106652-5e5b-4063-ab1c-312a04246222/82d8c885-ab64-4dcb-8019-94ba100ce366.png',
      address: {
        lat: 28.6139,
        lng: 77.2090,
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Graphic Designer',
      photo: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/77106652-5e5b-4063-ab1c-312a04246222/82d8c885-ab64-4dcb-8019-94ba100ce366.png',
      address: {
        lat: 28.7041,
        lng: 77.1025,
      },
    },
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // Simulate fetching data with a timeout
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: { profiles: mockProfiles } });
          }, 1000); // Simulate a 1-second delay
        });

        console.log(response.data); // Log the "fetched" data for debugging

        // Check if the profiles key exists and is an array
        if (response.data && Array.isArray(response.data.profiles)) {
          setProfiles(response.data.profiles);
        } else {
          setError('Profile data is not in the expected format.');
        }
      } catch (err) {
        setError('Failed to fetch profiles');
        console.error(err); // Log the error for more insights
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} onProfileSelect={onProfileSelect} />
      ))}
    </div>
  );
};

export default ProfileList;