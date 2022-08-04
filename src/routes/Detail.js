import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from 'fbase';
import { setDoc, doc } from 'firebase/firestore';
import { timeData, locationData } from 'data/Data';
import * as Btn from 'components/Button';
import * as Dt from 'components/Detail';
import styled from 'styled-components';

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
    console.log(detail);
  };
  useEffect(() => {
    getDetail();
  }, []);
  const onToggle = () => {
    setToggle((toggle) => !toggle);
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
  //book doc체크

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
        <Dt.DetailContainer>
          <Dt.DetailImg src={detail.medium_cover_image} alt={detail.title} />
          <Dt.DetailInfoCon>
            <Dt.DetailTitle>{detail.title}</Dt.DetailTitle>
            <Dt.DetailInfo>러닝타임 {detail.runtime}</Dt.DetailInfo>
            <Dt.DetailInfo>평점 {detail.rating}</Dt.DetailInfo>
            <Dt.DetailGenre>
              {detail.genres.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </Dt.DetailGenre>

            {isLoggedIn && (
              <Btn.BookBtn onClick={onToggle}>예매하기</Btn.BookBtn>
            )}
            <div>
              {toggle ? (
                <Dt.BookContainer>
                  <Dt.BookInfo>
                    <span>선택한 영화: {selectMovie}</span>
                    <span>선택한 시간: {time}</span>
                    <span>선택한 극장: {location}</span>
                  </Dt.BookInfo>
                  <Dt.MovieBookCon>
                    <div>
                      {timeData.map((item, i) => (
                        <Btn.FillterBtn key={i} onClick={timeClick}>
                          {item.time}
                        </Btn.FillterBtn>
                      ))}
                    </div>
                    <div>
                      {locationData.map((item, i) => (
                        <Btn.FillterBtn key={i} onClick={locationClick}>
                          {item.location}
                        </Btn.FillterBtn>
                      ))}
                    </div>
                  </Dt.MovieBookCon>
                  <div>
                    <Btn.BookBtn onClick={onClick}>예약</Btn.BookBtn>
                  </div>
                </Dt.BookContainer>
              ) : null}
            </div>
          </Dt.DetailInfoCon>
          <Dt.DetailDes>{detail.description_full}</Dt.DetailDes>
        </Dt.DetailContainer>
      )}
    </div>
  );
};
export default Detail;
