import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Movie = ({ medium_cover_image, title, summary, genres, id, onClick }) => {
  return (
    <div>
      <div>
        <div key={id}>
          <img src={medium_cover_image} />
          <Link to={`/movie/${id}`}>
            <h2 onClick={onClick}>{title}</h2>
          </Link>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
