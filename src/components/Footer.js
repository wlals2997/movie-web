import React from "react";
import styled from "styled-components";

const FooterBox=styled.footer`
display:flex;
justify-content:center;
align-items:center;
color:white;
padding-top:30px;
`
const Footer=()=>{
return(
    <FooterBox>&copy; Movie-web {new Date().getFullYear()}</FooterBox>
)
}
export default Footer;