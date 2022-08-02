import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Footer from './Footer';
import Navigation from './Navigation';
import Profile from 'routes/Profile';
import Book from 'routes/Book';
import MovieSection from 'routes/MovieSection';
import Detail from 'routes/Detail';
const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
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
        <Route path='/login' element={<Auth />}></Route>
        <Route path='/movie' element={<MovieSection />}></Route>
        <Route
          path='/movie/:id'
          element={<Detail isLoggedIn={isLoggedIn}  />}
        ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/book' element={<Book isLoggedIn={isLoggedIn} userObj={userObj}  />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
