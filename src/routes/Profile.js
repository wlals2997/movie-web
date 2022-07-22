import { auth } from 'fbase';
import { updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ userObj, refreshUser }) => {
  const navigate = useNavigate();
  const [userDisplayName, setUserDisplayName] = useState(userObj.displayName);
  const onLogoutClick = () => {
    auth.signOut();
    navigate('/');
  };
  const getUserData = async () => {};

  useEffect(() => {
    getUserData();
  }, []);
  const onChange = (e) => {
    const { value } = e.target;
    setUserDisplayName(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== userDisplayName) {
      await updateProfile(auth.currentUser, { displayName: userDisplayName });
    }
    refreshUser();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='수정할 이름을 작성하세요'
          value={userDisplayName}
          onChange={onChange}
        ></input>
        <input type='submit' value='수정'></input>
      </form>
      <span>{userObj.email}</span>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
};
export default Profile;
