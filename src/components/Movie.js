import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//motion & gesture 라이브러리
import { motion } from 'framer-motion';
const MoviesImg = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  margin: 1rem 0;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(255, 255, 255, 0.521) 0px 50px 100px -20px,
      rgba(240, 237, 237, 0.3) 0px 30px 60px -30px;
  }
  transition: transform 0.6s;
`;
const MoviesTitle = styled.h4`
  font-size: 0.8rem;
  text-align: center;
`;
const Movie = ({ medium_cover_image, title, id, onClick }) => {
  return (
    <motion.div
      key={id}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration:1}}
    >
      <Link to={`/movie/${id}`}>
        <MoviesImg src={medium_cover_image} alt={title} />
        <MoviesTitle onClick={onClick}>{title}</MoviesTitle>
      </Link>
    </motion.div>
  );
};

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
