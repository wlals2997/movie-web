import React, { useEffect, useState } from 'react';
import Movie from 'components/Movie';

const MovieSection = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.5&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json)
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
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default MovieSection;
