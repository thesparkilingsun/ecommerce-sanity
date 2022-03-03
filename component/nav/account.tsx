import {VscAccount} from "react-icons/vsc"
import {AiOutlineShoppingCart} from "react-icons/ai"
import styled from "styled-components";
import { IconBase } from "react-icons";

const AccountIcon = styled(VscAccount)`
grid-column: 11 / span 1;
font-size:${props => props.theme.iconSize.size};
align-self: center;
color: ${props=>props.theme.colors.baseTint};
    &:hover{
        color: ${props => props.theme.colors.hoverColor};
    }
`;

const CartIcon = styled(AiOutlineShoppingCart)`
grid-column: 12 / span 1;
font-size:${props => props.theme.iconSize.size};
align-self: center;
color: ${props=>props.theme.colors.baseTint};
    &:hover{
        color: ${props => props.theme.colors.hoverColor};
    }
`;


export default function Account(){


    return(
        <>
            <AccountIcon  />
            <CartIcon />
        </>
    )
}