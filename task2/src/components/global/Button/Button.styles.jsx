import styled from "styled-components";
import { Colors } from '@utils';

const Button = styled.button`
    text-align: center;
    border-radius: 0.2rem;
    border: none;
`;

const TransparentButton = styled(Button)`
    color: ${Colors.PRIMARY_RED};
    background: ${Colors.TRANSPARENT_WHITE};
`;

const ResetButton = styled(Button)`
    padding: 1em 1.5em;
    margin: 0 0.5em;
    border: 2px solid ${Colors.PRIMARY_RED};
    background: ${Colors.PRIMARY_DARK};
    color: ${Colors.WHITE};
`;

const RedButton = styled(Button)`
    color: ${Colors.WHITE};
    background-color: ${Colors.PRIMARY_RED};
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