import styled from 'styled-components';

export const FillterContainer = styled.div`
  margin-right: 2rem;
  min-width: 5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
`;
export const FillterBtn = styled.button`
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
export const BookBtn = styled(FillterBtn)`
  margin-top: 1em;
  background: #e50813;
  border: none;
  border-radius: 0.2em;
  &:hover {
    background-color: #ffffff;
    color: black;
  }
`;
