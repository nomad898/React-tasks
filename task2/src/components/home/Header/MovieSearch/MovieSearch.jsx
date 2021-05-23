import styled from 'styled-components';
import { useHistory, useLocation, useParams } from "react-router-dom";
import queryString from 'query-string'
import { useDispatch } from "react-redux";
import { moviesThunk } from '@stores/thunks';
import { MovieSearchButton } from './MovieSearchButton.styles';
import { MovieSearchInput } from './MovieSearchInput.styles';

const Wrapper = styled.div`
    display: flex;
    padding: 0 3rem;
    margin-bottom: 6em;
`;


const MovieSearch = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    let location = useLocation();

    const handleChange = (event) => {
        history.push(`/search/${event.target.value}`);
    };

    const handleClick = () => {
        dispatch(moviesThunk.getMovies({ search: location.pathname.split('/')[2] }));
    };

    return (
        <Wrapper>
            <MovieSearchInput placeholder="What do you want to watch?" onChange={handleChange} />
            <MovieSearchButton onClick={handleClick}>
                SEARCH
            </MovieSearchButton>
        </Wrapper>
    )
};

export { MovieSearch };