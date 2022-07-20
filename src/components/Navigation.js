import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = ({ isLoggedIn }) => {
  return (
    <>
      <h2>
        <Link to='/'>영화메인로고</Link>
      </h2>

      <ul>
        <li>
          <Link to='/movie'>영화</Link>
        </li>
        <li>
          <Link to='/book'>영화예매</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to='/profile'>프로필</Link>
          </li>
        ) : (
          <li>
            <Link to='/login'>로그인</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navigation;
