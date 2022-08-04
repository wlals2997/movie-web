import React from 'react';
import styled from 'styled-components';

const Tt = styled.div`
  color: black;
`;
const BookImageTest = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;
const Book = ({ id, movie, time, location, nickname, movieImage }) => {
  return (
    <div>
      <BookImageTest src={movieImage} alt={id} />
      <Tt>{movie}</Tt>
      <Tt>{time}</Tt>
      <Tt>{location}</Tt>
      <Tt>{nickname}</Tt>
      </div>
  );
};
export default Book;
