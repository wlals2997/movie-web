import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Footer from './Footer';
import Navigation from './Navigation';
import Profile from 'routes/Profile';
import Book from 'routes/Book';
import Movie from 'routes/Movie';
const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Navigation isLoggedIn={isLoggedIn} />
      <Routes>
        {isLoggedIn ? (
          <Route exact path='/' element={<Home />}></Route>
        ) : (
          <Route exact path='/login' element={<Auth />}></Route>
        )}

        <Route exact path='/movie' element={<Movie />}></Route>

        <Route exact path='/book' element={<Book />}></Route>
        <Route exact path='/profile' element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
