import React, { useEffect, useState } from 'react';
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { dbService } from 'fbase';
import Book from 'components/Book';
import styled from 'styled-components';

const BookTicket=styled.div`
display:grid;
place-items: center;
min-height:50vh;

`
const Test=styled.div`
background-color:white;
width:500px;

`
const Yy=styled.div`
color:black;
`
const BookSection = ({ isLoggedIn, userObj }) => {
  const [book, setBook] = useState([]);
  //유저가 예약한 영화와 프로필 가져오기
  const [bookCheck, setBookCheck] = useState(false);
  const userData = async () => {
    const q = query(collection(dbService, 'usersProfile'));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      ...doc.data(),
      id: doc.id,
    }));
    setBook(data);
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
    <div>
    <BookTicket>
      {isLoggedIn ? (
        <Test>
          {book.map((item, id) => {
            return (
              <Book
                key={item.id}
                movie={item.movie}
                time={item.time}
                location={item.location}
                nickname={item.nickname}
                image={item.movieImage}
              />
            );
          })}
          <Yy>{userObj.email}</Yy>

          <button onClick={onClick}>예매취소</button>
        </Test>
      ) : (
        <span>로그인을 해주세요</span>
      )}
    </BookTicket>
    </div>
  );
};
export default BookSection;
