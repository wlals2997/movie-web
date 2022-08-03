import { useEffect } from 'react';
import * as Btn from 'components/Button';

// const FillterContainer = styled.div`
//   margin-right: 2rem;
//   min-width: 5rem;
//   padding: 0.5rem 1rem;
//   margin-bottom: 0.8rem;
// `;
// const FillterBtn = styled.button`
//   background: transparent;
//   border: 1px solid white;
//   margin: 0.3rem;
//   padding: 0.2rem;
//   cursor: pointer;
//   &:hover {
//     background-color: #d3d3d3;
//     transition: 0.5s;
//   }
// `;
//장르필터
const Fillter = ({ setActiveGenre, activeGenre, setFilterItem, movies }) => {
  const onClick = (e) => {
    setFilterItem(e.target.innerText);
  };
  return (
    <Btn.FillterContainer>
      <Btn.FillterBtn onClick={onClick}>Drama</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Comedy</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Romance</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Horror</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Documentary</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Action</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>History</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>War</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Crime</Btn.FillterBtn>
      <Btn.FillterBtn onClick={onClick}>Mystery</Btn.FillterBtn>
    </Btn.FillterContainer>
  );
};
export default Fillter;
