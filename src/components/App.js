import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import fbase from '../fbase';
import { auth } from '../fbase';
import { Navigate } from 'react-router-dom';
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null); //유저정보
  useEffect(() => {
    //유저상태의 변화를 감지한다.
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          email: user.email,
          // updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true); //처음에는 false이나 user의 존재여부를 판명이 되고 true가 되면 해당 화면을 render한다.
    });
  }, []);
  console.log(userObj);
  // const refreshUser = () => {
  //   const user = auth.currentUser;
  //   setUserObj({
  //     displayName: user.displayName,
  //     updateProfile: (args) => user.updateProfile(args),
  //   });
  // };
  return (
    <div className='App'>
      {init ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          // refreshUser={refreshUser}
        />
      ) : (
        '초기화'
      )}
    </div>
  );
}

export default App;
