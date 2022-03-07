import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const SearchIcon = styled(BsSearch)`
    grid-column: 10 / span 1;
    align-self: center;
    margin-left: 10px;
    color: ${(props) => props.theme.colors.baseTint};
    &:hover {
        color: ${(props) => props.theme.colors.hoverColor};
    }
    font-size: 1.2rem;
`;

export default function Searchbar() {
    return (
        <>
            <input
                type='text'
                id='search'
                placeholder='Search'
                style={{
                    alignSelf: 'center',
                    height: '2rem',
                    padding: '0.25rem',
                    gridColumn: '7 / span 3'
                }}
            />
            <SearchIcon />
        </>
    );
}
