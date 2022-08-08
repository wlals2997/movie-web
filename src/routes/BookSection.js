import React, { useEffect, useState } from 'react';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { dbService } from 'fbase';
import Book from 'components/Book';
import styled from 'styled-components';
import * as Btn from 'components/Button';
const BookTicket = styled.div`
  display: grid;
  place-items: center;
  min-height: 50vh;
  padding: 30px;
  
`;
const BookTicketCon = styled.div`
  background-color: white;
  width: 25%;
  margin-top: 1.6em;
  border-radius:2%;
`;
const Yy = styled.span`
  text-align: left;
`;
const BookSection = ({ isLoggedIn, userObj }) => {
  const [book, setBook] = useState([]);
  //유저가 예약한 영화와 프로필 가져오기
  const [bookCheck, setBookCheck] = useState(false);
  const userData = async (book) => {
    const userRef = doc(dbService, 'usersProfile', 'book');
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      setBook(userSnap.data());
    }
    return null;
  };

  //console.log(book);
  useEffect(() => {
    userData();
  }, []);
  //예매취소
  const onClick = async () => {
    await deleteDoc(doc(dbService, 'usersProfile', 'book'));
    document.location.href = '/movie';
  };

  return (
    <BookTicket>
      <h3>My Ticket</h3>

      {isLoggedIn ? (
        <BookTicketCon>
          <Book
            movieImage={book.movieImage}
            movie={book.movie}
            time={book.time}
            location={book.location}
          />
          <Btn.BookBtn onClick={onClick}>예매취소</Btn.BookBtn>
        </BookTicketCon>
      ) : (
        <span>로그인을 해주세요</span>
      )}
    </BookTicket>
  );
};
export default BookSection;
