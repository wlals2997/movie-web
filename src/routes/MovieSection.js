import React, { useEffect, useState } from 'react';
import Movie from 'components/Movie';
import styled from 'styled-components';
import Fillter from 'components/Fillter';

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
`;
const MovieContainer = styled.div`
  margin: 3% 20%;
`;
const MovieSection = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //필터
  const [filterItem, setFilterItem] = useState('');
  //장르
  const [activeGenre,setActiveGenre]=useState('');
  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.5&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const onClick = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieContainer>
          <Fillter movies={movies} setFilterItem={setFilterItem} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
          <Movies>
            {filterItem ===''?
            movies.map((movie)=>(
              <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              onClick={onClick}
            />
            )):
            movies.map((movie) => (
              movie.genres.includes(filterItem)?
              <Movie
                key={movie.id}
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                onClick={onClick}
              />:null
            ))}
          </Movies>
        </MovieContainer>
      )}
    </div>
  );
};
export default MovieSection;
