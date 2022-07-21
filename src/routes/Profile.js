import { auth } from 'fbase';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    auth.signOut();
    navigate('/');
  };
  return (
    <>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
};
export default Profile;
