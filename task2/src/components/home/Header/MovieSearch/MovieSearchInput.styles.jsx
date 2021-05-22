import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';

//TODO: divide to global part
const MovieSearchInput = styled.input`
    width: 100%;
    color: ${color.white};
    background-color: ${color.transparentDark};
    border: none;
    border-radius: 0.2rem;
    padding-left: 1.5em;
`;

export { MovieSearchInput };