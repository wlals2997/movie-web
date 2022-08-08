import styled from 'styled-components';

export const LoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 70vh;
flex-direction: column;
  
`;
export const LoginBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
export const LoginTitle=styled.span`
font-size:0.6em;
`
export const LoginInput = styled.input`
  margin-bottom: 10%;
  background-color: #333333;
  border: none;
  padding:0.6em;
`;
export const ToggleBtn = styled.span`
margin-top: 1em;
border: none;
background-color:#333333;
border-radius: 0.2em;
&:hover {
  background-color:  #e50813;
  color: white;
}
padding:0.6em 3em;
font-size:0.8em;
`;

