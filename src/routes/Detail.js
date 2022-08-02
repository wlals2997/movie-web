import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from 'fbase';
import { doc, setDoc } from 'firebase/firestore';
import { timeData, locationData } from 'data/Data';
const Detail = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
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
  const timeClick = useCallback((e) => {
    setTime(e.target.innerText);
    console.log(time);
  }, []);
  //극장예약
  const locationClick = useCallback((e) => {
    setLocation(e.target.innerText);
    console.log(time);
  }, []);
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h2>{detail.title}</h2>
          <p>{detail.description_full}</p>
          {isLoggedIn && <button onClick={onToggle}>예매하기</button>}

          <div>
            {toggle ? (
              <div>
                <span>영화: {selectMovie}</span>
                <div>
                  <span>{time}</span>
                </div>
                <div>
                  <span>{location}</span>
                </div>
                {timeData.map((item, i) => (
                  <div key={i} onClick={timeClick}>
                    <button>{item.time}</button>
                  </div>
                ))}
                <div>
                  {locationData.map((item, i) => (
                    <div key={i} onClick={locationClick}>
                      <button>{item.location}</button>
                    </div>
                  ))}
                </div>
                <div>
                  <button onClick={onClick}>예약</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
