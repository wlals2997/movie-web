import React from 'react';
import * as LoginCon from './Login.style';
export const LoginContainer = ({ children }) => {
  return <LoginCon.LoginContainer>{children}</LoginCon.LoginContainer>;
};
export const LoginBox = ({ children }) => {
  return <LoginCon.LoginBox>{children}</LoginCon.LoginBox>;
};
export const LoginInput = ({ children }) => {
  return <LoginCon.LoginInput>{children}</LoginCon.LoginInput>;
};
export const ToggleBtn = ({children}) => {
  return <LoginCon.LoginInput>{children}</LoginCon.LoginInput>;
};
export const LoginTitle = ({children}) => {
  return <LoginCon.LoginTitle>{children}</LoginCon.LoginTitle>;
};


