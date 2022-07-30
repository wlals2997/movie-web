import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from 'fbase';
import { doc, setDoc } from 'firebase/firestore';
import { timeData, locationData } from 'data/Data';
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('서울');
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
      time: time,
      location: location,
    });

    console.log(selectMovie);
  };
//시간예약
const timeClick=useCallback(
(e)=>{
  setTime(e.target.innerText)
  console.log(time)
},
[]
)
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
                {timeData.map((item, i) => (
                  <div key={i}onClick={timeClick}>
                  <button >{item.time}</button>
                  </div>
                ))}
                {/* <span>시간: {time}</span>
                <span>극장: {location}</span> */}
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
