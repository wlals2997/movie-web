import React from 'react';
import styled, { keyframes } from 'styled-components';
const Home = ({ item }) => {
  return (
    <div className='slide' key={item.id}>
      <img src={item.large_cover_image} alt={item.id} />
    </div>
  );
};
export default Home;
