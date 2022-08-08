import { auth } from 'fbase';
import { updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, query } from 'firebase/firestore';
import { dbService } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import * as LoginCon from 'components/Login';
import * as Btn from 'components/Button';
import styled from 'styled-components';

const ProfileBox = styled.div`
  background-color: #333333;
  text-align: center;
  border-radius: 2%;
  padding: 4% 6%;
`;
const ProfileIcon = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border: 4px solid white;
  border-radius: 50%;
  padding: 5%;
`;
const ProfileInfo = styled.div`
  margin-top:25%;
`;
const EmailInfo=styled(ProfileInfo)`
margin-bottom:15%;
`

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
  }; //로그아웃

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
      <LoginCon.LoginTitle>프로필</LoginCon.LoginTitle>
      <ProfileBox>
        <ProfileIcon>
          <FontAwesomeIcon icon={faUser} size='3x' />
        </ProfileIcon>
        <ProfileInfo>{userName.nickname}</ProfileInfo>
        <EmailInfo>{userObj.email}</EmailInfo>
        <Btn.BookBtn onClick={onLogoutClick}>Logout</Btn.BookBtn>
      </ProfileBox>
    </LoginCon.LoginContainer>
  );
};
export default Profile;
