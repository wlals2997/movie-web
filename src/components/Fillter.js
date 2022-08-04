import { useEffect } from 'react';
import * as Btn from 'components/Button';


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
