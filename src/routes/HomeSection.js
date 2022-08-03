import React from 'react';
import { useState, useEffect } from 'react';
import Home from 'components/Home';
import styled from 'styled-components';

const Container = styled.body`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HomeSection = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.5&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Container>
      <div className='slider'>
        <div className='slide-track'>
          {movies.map((item) => (
            <Home item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default HomeSection;
