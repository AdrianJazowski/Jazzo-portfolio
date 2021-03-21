/** @format */
import { createGlobalStyle } from "styled-components";
import bgPhoto from "../assets/greyBg.jpg";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition: .3s; 
}
 body{

  background-image: url(${bgPhoto});
  background-size: cover;
  overflow-x: hidden;
  font-family: emoji;

} 
button{

cursor: pointer;

}
a{
  text-decoration: none;
  &:hover{
    text-decoration:none;
  }
}

`;

export default GlobalStyles;
