import styled from 'styled-components';
import { MovieSearchButton } from './MovieSearchButton.styles';
import { MovieSearchInput } from './MovieSearchInput.styles';

const Wrapper = styled.div`
    display: flex;
    padding: 0 3rem;
    margin-bottom: 6em;
`;


const MovieSearch = () => (
    <Wrapper>
        <MovieSearchInput placeholder="What do you want to watch?" />
        <MovieSearchButton>
            SEARCH
        </MovieSearchButton>
    </Wrapper>
);

export { MovieSearch };