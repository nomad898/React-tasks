import styled from 'styled-components';
import { Colors } from '@utils';

const Text = styled.span`
    color: ${Colors.WHITE};
    font-weight: 400;
`;

const RedText = styled.span`
    color: ${Colors.PRIMARY_RED};
`;

const BoldText = styled.span`
    font-weight: 700;
`;

export { Text, RedText, BoldText };