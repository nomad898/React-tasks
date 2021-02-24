import styled from "styled-components";
import { AppButtonStyled } from '@components';

const AddMovieButtonStyled = styled(AppButtonStyled)`
    position: relative;
    padding: 10px 20px;
    font-size: 16px;
    color: #f65261;
    background: rgba(0, 0, 0, 0.2);
`;


const AddMovieButton = (props, state) => (
    <AddMovieButtonStyled>
        + ADD MOVIE
    </AddMovieButtonStyled>
);

export { AddMovieButton };