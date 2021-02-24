import styled from "styled-components";
import { AppButtonStyled } from '@components';

const MovieSearchInputStyled = styled.input`
    width: 80%;
    height: 100%;
    color: #ffffff;
    background-color: rgba(0,0,0,0.7);
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 10px;
`;

const MovieSearchButtonStyled = styled(AppButtonStyled).attrs(props => ({
    placeholder: props.searchPlaceholder,
}))`
    background-color: #f65261;  
    color: #ffffff;
    padding: 10px 30px;
    font-size: 16px;
`;

const MovieSearch = () => (
    <>
        <MovieSearchInputStyled placeholder="What do you want to watch?" />
        <MovieSearchButtonStyled>
            SEARCH
        </MovieSearchButtonStyled>
    </>
);

export { MovieSearch };