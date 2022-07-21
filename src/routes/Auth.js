import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = ({isLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const auth = getAuth();
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    let data; //변수설정

    e.preventDefault();
    try {
      //New user 회원가입
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
        document.location.href='/'
      } else {
        data = await signInWithEmailAndPassword(auth, email, password); //존재하는 유저일 경우
      }
      console.log(data);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  const onSocialLogin = async (e) => {
    let provider;
    const { name } = e.target;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
    console.log(data);
    document.location.href='/'
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='text'
          placeholder='이메일'
          value={email}
          onChange={onChange}
          required
        ></input>
        {/* <input
          type='submit'
          value='중복확인'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        ></input> */}

        <input
          name='password'
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={onChange}
        ></input>
        <input type='submit' value={newAccount ? '회원가입' : '로그인'}></input>
      </form>
      <span onClick={toggleAccount}>{newAccount ? '로그인' : '회원가입'}</span>
      <div>
        <button name='google' onClick={onSocialLogin}>
          구글로 시작하기
        </button>
      </div>
    </div>
  );
};
export default Auth;
