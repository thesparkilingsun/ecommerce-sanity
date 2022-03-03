import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*,html,body{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}

body{
 width: 100%;
 height:100%;
 overflow: auto;
 background-color: #Fdfcfa;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#Container{
  width:100%;
  height:100%;
  overflow: hidden;
  margin:0px;
  max-width: 100%;

}
`;