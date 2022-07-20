import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import fbase from '../fbase';
import { auth } from '../fbase';
function App() {
  const [init, setInit] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    //유저상태의 변화를 감지한다.
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); //처음에는 false이나 user의 존재여부를 판명이 되고 true가 되면 해당 화면을 render한다.
    });
  }, []);
  return (
    <div className='App'>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : '초기화'}
    </div>
  );
}

export default App;
