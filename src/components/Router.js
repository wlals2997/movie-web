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
const AppRouter = ({ isLoggedIn, userObj, refreshUser,book }) => {
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
        <Route path='/movie' element={<MovieSection />}></Route>
        <Route path='/movie/:id' element={<Detail />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/book' element={<Book  book={book} /> }></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
