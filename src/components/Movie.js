import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoviesImg = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  margin: 1rem 0;
`;
const MoviesTitle = styled.h4`
  font-size: 0.8rem;
  text-align: center;
`;
const Movie = ({ medium_cover_image, title, id, onClick }) => {
  return (
    <div key={id}>
      <Link to={`/movie/${id}`}>
        <MoviesImg src={medium_cover_image} alt={title} />
        <MoviesTitle onClick={onClick}>{title}</MoviesTitle>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
