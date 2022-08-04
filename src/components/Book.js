import React from 'react';
import styled from 'styled-components';

const Tt=styled.div`
color:black;
`
const Book = ({ id, movie, time, location, nickname,image }) => {
  return (
    <Tt key={id}>
      {movie}
      <Tt>{time}</Tt>
      <Tt>{location}</Tt>
      <Tt>{nickname}</Tt>
      <img src={image}/>
    </Tt>
  );
};
export default Book;
