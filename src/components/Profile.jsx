// src/components/Profile.jsx
import React from 'react';
import { decryptData } from '../utils/encryption';

const Profile = () => {
  const encryptedData = localStorage.getItem('userData');
  const userData = encryptedData ? decryptData(encryptedData) : null;

  return (
    <div>
      <h1>Profile</h1>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Password: {userData.password}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Profile;