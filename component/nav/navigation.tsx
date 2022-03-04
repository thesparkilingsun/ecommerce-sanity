import styled from "styled-components";
import Upload from "../upload/upload";
import Account from "./account";
import Menu from "./menu";
import Searchbar from "./searchBar";

const NavigationBar = styled.nav`
  width:${props => props.theme.shape.width};
  height:${props => props.theme.shape.height};
  background-color: ${props => props.theme.colors.lightBlue};;
  height: fit-content;
  display:grid;
  padding-bottom: 1rem;
  padding-top: 1rem;
  grid-template-rows: 1;
  grid-template-columns: repeat(12,1fr);
  column-gap: 0px;
`;

export default function Navigation(){
  return(
    <NavigationBar>
      <Menu />
      <Searchbar />
      <Account />
    </NavigationBar>
  )
}