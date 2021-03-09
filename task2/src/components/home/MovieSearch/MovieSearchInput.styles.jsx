import styled from 'styled-components';
import { Colors } from '@utils';

const MovieSearchInput = styled.input`
    flex-basis: 100%;
    color: ${Colors.WHITE};
    background-color: ${Colors.TRANSPARENT_DARK};
    border: none;
    border-radius: 0.2rem;
    padding-left: 1.5em;
`;

export { MovieSearchInput };