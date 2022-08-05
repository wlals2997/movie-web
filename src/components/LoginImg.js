import React from 'react';
import styled from 'styled-components';

const LoginMainImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const LoginImg = () => {
  return (
    <div>
      <LoginMainImg
        src='https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&w=1000&q=80'
        alt='LoinImg'
      />
    </div>
  );
};
export default LoginImg;
