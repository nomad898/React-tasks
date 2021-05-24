import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';

const Button = styled.button`
    text-align: center;
    border-radius: 0.2rem;
    border: none;
`;

const TransparentButton = styled(Button)`
    color: ${color.primaryRed};
    background: ${color.transparentWhite};
`;

const ResetButton = styled(Button)`
    padding: 1em 1.5em;
    margin: 0 0.5em;
    border: 2px solid ${color.primaryRed};
    background: ${color.primaryDark};
    color: ${color.white};
`;

const RedButton = styled(Button)`
    color: ${color.white};
    background-color: ${color.primaryRed};
`;

const SubmitButton = styled(RedButton)`
    padding: 0.8em 1.5em;
    margin: 0 0.5em;
`;

export {
    Button,
    TransparentButton,
    RedButton,
    ResetButton,
    SubmitButton
};