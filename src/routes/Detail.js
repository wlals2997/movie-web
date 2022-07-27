import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from 'fbase';
import { doc,updateDoc } from 'firebase/firestore';
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [book, setBook] = useState();

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
    // console.log(json)
  };
  useEffect(() => {
    getDetail();
  }, []);
  const onClick =async (e) => {
    await setDoc(doc(dbService,))
    setBook(detail.title);
  };
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h2>{detail.title}</h2>
          <p>{detail.description_full}</p>
          <button onClick={onClick}>예매</button>
        </div>
      )}
    </div>
  );
};
export default Detail;
