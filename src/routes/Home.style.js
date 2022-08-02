import styled from "styled-components";

export const SlideContainer=styled.body`
align-items: center;
justify-content: center;
`
export const Slider=styled.div`
margin: auto;
overflow: hidden;
position: relative;
width: auto;
`
export const SlideTrack=styled.div`

`
export const ImgSlide=styled.img`
transition: transform 0.6s;
&:hover{
    transform: translateY(-10px);
}
`

// imgSlide:hover{
  
// }