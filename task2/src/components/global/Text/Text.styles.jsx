import styled from 'styled-components';
import { Colors } from '@utils';

const Text = styled.span`
    color: ${Colors.WHITE};
    font-weight: 400;
`;

const BoldText = styled.span`
    font-weight: 700;
`;

const RedText = styled.span`
    color: ${Colors.PRIMARY_RED};
`;

export {
    Text,
    RedText,
    BoldText
};