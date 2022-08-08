import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from 'fbase';
import { setDoc, doc } from 'firebase/firestore';
import { timeData, locationData } from 'data/Data';
import * as Btn from 'components/Button';
import * as DetailCon from 'components/Detail';
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
      movieImage:detail.medium_cover_image,
    });
    document.location.href = '/book';
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
        <DetailCon.DetailContainer>
          <DetailCon.DetailImg src={detail.medium_cover_image} alt={detail.title} />
          <DetailCon.DetailInfoCon>
            <DetailCon.DetailTitle>{detail.title}</DetailCon.DetailTitle>
            <DetailCon.DetailInfo>러닝타임 {detail.runtime}</DetailCon.DetailInfo>
            <DetailCon.DetailInfo>평점 {detail.rating}</DetailCon.DetailInfo>
            <DetailCon.DetailGenre>
              {detail.genres.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </DetailCon.DetailGenre>

            {isLoggedIn ? (
              <Btn.BookBtn onClick={onToggle}>예매하기</Btn.BookBtn>
            ) : (
              <DetailCon.BookLogin>예매는 로그인 후 이용해 주세요</DetailCon.BookLogin>
            )}
            <div>
              {toggle ? (
                <DetailCon.BookContainer>
                  <DetailCon.BookInfo>
                    <span>선택한 영화: {selectMovie}</span>
                    <span>선택한 시간: {time}</span>
                    <span>선택한 극장: {location}</span>
                  </DetailCon.BookInfo>
                  <DetailCon.MovieBookCon>
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
                  </DetailCon.MovieBookCon>
                  <div>
                    <Btn.BookBtn onClick={onClick}>예약</Btn.BookBtn>
                  </div>
                </DetailCon.BookContainer>
              ) : null}
            </div>
          </DetailCon.DetailInfoCon>
          <DetailCon.DetailDes>{detail.description_full}</DetailCon.DetailDes>
        </DetailCon.DetailContainer>
      )}
    </div>
  );
};
export default Detail;
