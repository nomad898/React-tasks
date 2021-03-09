import styled from 'styled-components';
import { Button } from '@components/global';
import { Colors } from '@utils';

const AddMovieButton = styled(Button)`
    padding: 0.6em 1.4em;
    color: ${Colors.PRIMARY_RED};
    background: ${Colors.TRANSPARENT_WHITE};
`;

export { AddMovieButton }