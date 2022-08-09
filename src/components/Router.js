import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/HomeSection';
import Auth from '../routes/Auth';
import Footer from './Footer';
import Navigation from './Navigation';
import Profile from 'routes/Profile';
import BookSection from 'routes/BookSection';
import MovieSection from 'routes/MovieSection';
import Detail from 'routes/Detail';
const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        <Route path='/book' element={<BookSection isLoggedIn={isLoggedIn} userObj={userObj}  />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
  );
};
export default AppRouter;
