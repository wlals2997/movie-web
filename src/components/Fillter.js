import { useEffect } from 'react';
import styled from 'styled-components';

const FillterContainer = styled.div`
  margin-right: 2rem;
  min-width: 5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
`;
const FillterBtn = styled.button`
  background: transparent;
  border: 1px solid white;
  margin: 0.3rem;
  padding: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
    transition: 0.5s;
  }
`;
//장르필터
const Fillter = ({ setActiveGenre, activeGenre, setFilterItem, movies }) => {
  const onClick = (e) => {
    setFilterItem(e.target.innerText);
  };
  return (
    <FillterContainer>
      <FillterBtn onClick={onClick}>Drama</FillterBtn>
      <FillterBtn onClick={onClick}>Comedy</FillterBtn>
      <FillterBtn onClick={onClick}>Romance</FillterBtn>
      <FillterBtn onClick={onClick}>Horror</FillterBtn>
      <FillterBtn onClick={onClick}>Documentary</FillterBtn>
      <FillterBtn onClick={onClick}>Action</FillterBtn>
      <FillterBtn onClick={onClick}>History</FillterBtn>
      <FillterBtn onClick={onClick}>War</FillterBtn>
      <FillterBtn onClick={onClick}>Crime</FillterBtn>
      <FillterBtn onClick={onClick}>Mystery</FillterBtn>
    </FillterContainer>
  );
};
export default Fillter;
