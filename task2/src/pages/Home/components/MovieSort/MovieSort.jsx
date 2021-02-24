import styled from 'styled-components';
import { MovieSortDropdown } from './MovieSortDropdown';
import { MovieGenreList } from './MovieGenreList';

const MovieSortStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px 70px;
    border-bottom: 5px solid #424242;    
`;

const MovieSort = () => (
    <MovieSortStyled>
        <MovieGenreList />
        <MovieSortDropdown />
    </MovieSortStyled>
);

export { MovieSort };