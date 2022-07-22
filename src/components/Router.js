import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Footer from './Footer';
import Navigation from './Navigation';
import Profile from 'routes/Profile';
import Book from 'routes/Book';
import Movie from 'routes/Movie';
const AppRouter = ({ isLoggedIn, userObj,refreshUser}) => {
  return (
    <BrowserRouter>
      <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
      <Routes>
        {isLoggedIn && (
          <>
            <Route
              path='/profile'
              element={<Profile userObj={userObj} refreshUser={refreshUser} />}
            ></Route>
          </>
        )}
        <Route path='/login' element={<Auth />} isLogged={isLoggedIn}></Route>
        <Route path='/movie' element={<Movie />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/book' element={<Book />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
