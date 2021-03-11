import styled from 'styled-components';
import '@styles/reset.css';
import '@styles/roboto.css';
import { Colors } from '@utils';

const App = styled.div`
    background-color: ${Colors.PRIMARY_DARK};
    font-family: "Roboto", sans-serif;
    color: ${Colors.WHITE};
`;

export { App };