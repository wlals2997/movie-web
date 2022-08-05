import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { dbService, storageService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore';
import LoginImg from 'components/LoginImg';
import * as LoginCon from 'components/Login';

const Auth = () => {
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
         await addDoc(collection(dbService, 'usersProfile'), {
          //이메일로 회원가입시  firestore db생성
          email: email,
          password: password,
          nickname: nickName,
        });
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
      <LoginImg/>
      <form onSubmit={onSubmit}>
        {newAccount ? (
          <div>
            <input
              name='email'
              type='text'
              placeholder='이메일'
              value={email}
              onChange={onChange}
              required
            ></input>
            <input
              name='password'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={onChange}
            ></input>
            <input
              name='passwordCheck'
              type='password'
              placeholder='비밀번호확인'
              value={passwordCheck}
              onChange={passwordCheckInput}
              required
            ></input>
            <span>{passwordCheckMessage}</span>
            <input
              name='nickname'
              type='text'
              placeholder='이름'
              value={nickName}
              onChange={nickNameChange}
              required
            ></input>
          </div>
        ) : (
          <div>
            <input
              name='email'
              type='text'
              placeholder='이메일'
              value={email}
              onChange={onChange}
              required
            ></input>
            <input
              name='password'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={onChange}
            ></input>
          </div>
        )}

        <input
          type='submit'
          value={newAccount ? '회원가입' : '로그인'}
          disabled={!isPassword}
        ></input>
      </form>

      <span onClick={toggleAccount}>{newAccount ? '로그인' : '회원가입'}</span>
    
    </LoginCon.LoginContainer>
  );
};
export default Auth;
