import { auth } from 'fbase';
import { updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, query } from 'firebase/firestore';
import { dbService } from 'fbase';
import * as LoginCon from 'components/Login';

const Profile = ({ userObj }) => {
  const [userName, setUserName] = useState([]);
  const getUser = async () => {
    const q = query(collection(dbService, 'usersProfile'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const newUserObj = {
        ...doc.data(),
      };
      setUserName(newUserObj);
      console.log(userName);
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  const navigate = useNavigate();
  // const [userDisplayName, setUserDisplayName] = useState(userObj.displayName); 수정할 이름 변수
  const onLogoutClick = () => {
    auth.signOut();
    navigate('/');
  };//로그아웃

  //이름 수정 함수
  // const getUserData = async () => {};

  // useEffect(() => {
  //   getUserData();
  // }, []);
  // const onChange = (e) => {
  //   const { value } = e.target;
  //   setUserDisplayName(value);
  // };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (userObj.displayName !== userDisplayName) {
  //     await updateProfile(auth.currentUser, { displayName: userDisplayName });
  //   }
  //   refreshUser();
  // };
  return (
    <LoginCon.LoginContainer>
      <h1>프로필</h1>
      <div>{userName.nickname}</div>
      <div>{userObj.email}</div>
      <button onClick={onLogoutClick}>Logout</button>
    </LoginCon.LoginContainer>
  );
};
export default Profile;
