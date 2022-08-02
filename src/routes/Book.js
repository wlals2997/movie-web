import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, doc } from 'firebase/firestore';
import { dbService } from 'fbase';

const Book = ({ isLoggedIn, userObj }) => {
  const [book, setBook] = useState([]);
  //유저가 예약한 영화와 프로필 가져오기
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
  return (
    <>
      {isLoggedIn ? (
        <span>
          {book.map((item, id) => {
            return (
              <div key={id}>
                {item.movie}
                <div>{item.time}</div>
                <div>{item.location}</div>
                <div>{item.nickname}</div>
              </div>
            );
          })}
          <div>{userObj.email}</div>
        </span>
      ) : (
        <span>로그인을 해주세요</span>
      )}
    </>
  );
};
export default Book;
