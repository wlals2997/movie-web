import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { dbService } from 'fbase';

const Book = () => {
  const [book,setBook]=useState([]);
  const getBook = async () => {
    const docRef = doc(dbService, 'usersProfile', 'book');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
     
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <>
      <span>{book}</span>
    </>
  );
};
export default Book;
