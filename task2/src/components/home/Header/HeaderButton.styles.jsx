import styled, { css } from 'styled-components';
import {
    TransparentButton,
    RedButton
} from '@components/global';

const AddMovieButton = styled(TransparentButton)`
    padding: 0.6em 1.4em;
`;

const SearchIconButton = styled(RedButton)`
    width: 2em;
    height: 2em;
`;

export {
    AddMovieButton,
    SearchIconButton
};