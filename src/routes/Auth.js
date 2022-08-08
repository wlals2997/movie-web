import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { dbService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore';
import * as LoginCon from 'components/Login';
import styled from 'styled-components';

const Gg = styled.input`
  margin-top: 1em;
  background: #e50813;
  border: none;
  border-radius: 0.2em;
  &:hover {
    background-color: #ffffff;
    color: black;
  }
  padding: 0.6em 2.5em;
  font-size: 0.8em;
`;
const Auth = () => {
  const [profile, setProfile] = useState([]);
  //이메일동일확인
  const [email, setEmail] = useState('');
  //사용자 닉네임
  const [nickName, setNickName] = useState('');

  //비밀번호확인
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false); //비밀번호유효성검사
  //New user
  const [newAccount, setNewAccount] = useState(true);
  //에러
  const [error, setError] = useState('');
  const auth = getAuth();
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
      setIsPassword(true);
    }
  };

  const onSubmit = async (e) => {
    let data; //변수설정
    e.preventDefault();
    try {
      //New user 회원가입
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
        document.location.href = '/';
        const userRef = await addDoc(collection(dbService, 'usersProfile'), {
          //이메일로 회원가입시  firestore db생성
          email: email,
          password: password,
          nickname: nickName,
        });
        console.log(userRef)
      } else {
        data = await signInWithEmailAndPassword(auth, email, password); //존재하는 유저일 경우
        document.location.href = '/';
      }
      console.log(data);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const passwordCheckInput = (e) => {
    //비밀번호확인
    const { value } = e.target;
    setPasswordCheck(value);
    if (password === value) {
      setPasswordCheckMessage('비밀번호가 같습니다.');
      setIsPassword(true);
    } else {
      setPasswordCheckMessage('비밀번호가 동일하지 않습니다.');
      setIsPassword(false);
    }
  };
  const nickNameChange = (e) => {
    const { value } = e.target;
    setNickName(value);
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  return (
    <LoginCon.LoginContainer>
      <form onSubmit={onSubmit}>
        {newAccount ? (
          <LoginCon.LoginBox>
            <LoginCon.LoginTitle>회원가입</LoginCon.LoginTitle>
            <LoginCon.LoginInput
              name='email'
              type='text'
              value={email}
              placeholder='이메일'
              onChange={onChange}
              required
            ></LoginCon.LoginInput>

            <LoginCon.LoginInput
              name='password'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={onChange}
            ></LoginCon.LoginInput>

            {/* <span>{passwordCheckMessage}</span> */}
            <LoginCon.LoginInput
              name='passwordCheck'
              type='password'
              placeholder='비밀번호 확인'
              value={passwordCheck}
              onChange={passwordCheckInput}
              required
            ></LoginCon.LoginInput>

            <LoginCon.LoginInput
              name='nickname'
              type='text'
              placeholder='이름'
              value={nickName}
              onChange={nickNameChange}
              required
            ></LoginCon.LoginInput>
          </LoginCon.LoginBox>
        ) : (
          <LoginCon.LoginBox>
            <LoginCon.LoginTitle>로그인</LoginCon.LoginTitle>
            <LoginCon.LoginInput
              name='email'
              type='text'
              placeholder='이메일'
              value={email}
              onChange={onChange}
              required
            ></LoginCon.LoginInput>

            <LoginCon.LoginInput
              name='password'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={onChange}
            ></LoginCon.LoginInput>
          </LoginCon.LoginBox>
        )}
        <LoginCon.LoginBox>
          <Gg
            type='submit'
            value={newAccount ? '회원가입' : '로그인'}
            disabled={!isPassword}
            className='gg'
          ></Gg>
        </LoginCon.LoginBox>
      </form>

      <LoginCon.ToggleBtn onClick={toggleAccount}>
        {newAccount ? '로그인' : '회원가입'}
      </LoginCon.ToggleBtn>
    </LoginCon.LoginContainer>
  );
};
export default Auth;
