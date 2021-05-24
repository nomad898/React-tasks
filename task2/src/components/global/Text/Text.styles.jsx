import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';

const Text = styled.span`
    color: ${color.white};
    font-weight: 400;
`;

const BoldText = styled.span`
    font-weight: 700;
`;

const RedText = styled.span`
    color: ${color.primaryRed};
`;

export {
    Text,
    RedText,
    BoldText
};