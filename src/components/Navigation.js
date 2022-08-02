import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  padding: 20px 45px;
  background-color:transparent;
  justify-content: space-between;
  align-items: center;
`;
const NavTitle=styled(Link)`
color:#E50813;
`
const NavList=styled.ul`
display:flex;
`
const NavMenuLi=styled.li`
padding:0px 10px;
`
const NavMenuTitle=styled(Link)`
color:white;
font-weight:560;
font-size:18px;
`
const Navigation = ({ isLoggedIn }) => {
  return (
    <Nav>
      <h2>
        <NavTitle to='/'>MINFLIX</NavTitle>
      </h2>

      <NavList>
        <NavMenuLi>
          <NavMenuTitle to='/movie'>영화</NavMenuTitle>
        </NavMenuLi>
        <NavMenuLi>
          <NavMenuTitle to='/book'>영화예매</NavMenuTitle>
        </NavMenuLi>
        {isLoggedIn ? (
          <NavMenuLi>
            <NavMenuTitle to='/profile'>프로필</NavMenuTitle>
          </NavMenuLi>
        ) : (
          <NavMenuLi>
            <NavMenuTitle to='/login'>로그인</NavMenuTitle>
          </NavMenuLi>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
