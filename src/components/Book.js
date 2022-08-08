import React from 'react';
import styled from 'styled-components';

const BookTicketInfo = styled.div`
  color: black;
  font-weight:600;
`;
const BookTitle = styled.h4`
  color: #c0c0c0;
  font-size: 0.6em;
  padding: 0.6em 0;
`;
const BookImage = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
  font-size: 24px;
  border-radius:2%;
`;
const BookDetailCon = styled.div`
  font-size: 24px;
  padding: 1em;
`;
const BookDetail = styled.div``;
const Book = ({ id, movie, time, location, nickname, movieImage }) => {
  return (
    <div>
      <BookImage src={movieImage} alt={movie} />
      <BookDetailCon>
        <BookTitle>영화</BookTitle>
        <BookTicketInfo>{movie}</BookTicketInfo>
        <BookDetail>
          <BookTitle>시간</BookTitle>
          <BookTicketInfo>{time}</BookTicketInfo>
          <BookTitle>극장</BookTitle>
          <BookTicketInfo>{location}</BookTicketInfo>
        </BookDetail>
      </BookDetailCon>
    </div>
  );
};
export default Book;
