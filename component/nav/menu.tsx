import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideNavContainer = styled.menu`
    width: fit-content;
    padding: ${(props) => props.theme.shape.padding};
    margin: ${(props) => props.theme.shape.padding};
`;
const MenuIcon = styled(GiHamburgerMenu)`
    font-size: ${(props) => props.theme.iconSize.size};
    color: black;
    color: ${(props) => props.theme.colors.baseTint};
    &:hover {
        color: ${(props) => props.theme.colors.hoverColor};
    }

    grid-column: 1 / span 1;
    align-self: center;
    margin-left: 5px;
`;

export default function Menu() {
    return (
        <>
            <SideNavContainer>
                <MenuIcon />
            </SideNavContainer>
        </>
    );
}
