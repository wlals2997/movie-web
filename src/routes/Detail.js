import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from 'fbase';
import { doc, setDoc } from 'firebase/firestore';
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [time,setTime]=useState('7시30분')
  const [location,setLocation]=useState('서울')
  const selectMovie = detail.title;
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
  const onToggle = () => {
    setToggle(true);
    
  };
 //예매
  const onClick = async (e) => {
    
    await setDoc(doc(dbService, 'usersProfile', 'book'), {
      movie: detail.title,
      time:time,
      location:location,
    });

    console.log(selectMovie);
  };
  //예매시간
  const timeLocation={
    available1:{

  }}
  console.log(timeLocation.available1.time)
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h2>{detail.title}</h2>
          <p>{detail.description_full}</p>
          <button onClick={onToggle}>예매하기</button>
          <div>
            {toggle ? (
              <>
                <span>영화: {selectMovie}</span>
                <span>시간: {time}</span>
                <span>극장: {location}</span>
                <div>
                <button onClick={onClick}>예약</button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
