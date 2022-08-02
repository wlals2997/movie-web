import React from 'react';
import { useState, useEffect } from 'react';
const Home = () => {
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
    <body className='container'>
    <div className='slider'>
      <div className='slide-track'>
        {movies.map((item, i) => (
          <div className='slide'>
            <img src={item.large_cover_image} className="imgSlide" />
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};
export default Home;
