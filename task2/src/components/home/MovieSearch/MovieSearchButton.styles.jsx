import styled from 'styled-components';
import { Colors } from '@utils';
import { Button } from '@components/global';

const MovieSearchButton = styled(Button)`
    padding: 1em 4em;
    background-color: ${Colors.PRIMARY_RED};
    color: ${Colors.WHITE};
    margin-left: 1rem;
    margin-right: 1rem;
`;

export { MovieSearchButton };