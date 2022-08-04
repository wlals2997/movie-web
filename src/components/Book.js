import React from 'react';
import styled from 'styled-components';

const Tt=styled.div`
color:black;
`
const Book = ({ id, movie, time, location, nickname,image }) => {
  return (
    <Tt key={id}>
      <img src={image} alt={id}/>
      <Tt>{movie}</Tt>
      <Tt>{time}</Tt>
      <Tt>{location}</Tt>
      <Tt>{nickname}</Tt>
    </Tt>
  );
};
export default Book;
