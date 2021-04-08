import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colors } from '@utils'

const Modal = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${Colors.TRANSPARENT_DARK};
`;

const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-height: 75%;
    max-width: 500px;
    max-height: 800px;
    background-color: ${Colors.PRIMARY_DARK};
`;

const ModalField = styled.div`
    padding: 1rem 10% 1rem 10%;
    text-align: ${props => (props.textAlign ? props.textAlign : null)};
`;

ModalField.propTypes = {
    textAlign: PropTypes.string,
};

const ModalFormFooter = styled(ModalField)`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 10% 1rem 10%;
`;

const ModalCloseButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    background-color: ${Colors.PRIMARY_DARK};
`;

const ModalTitle = styled.span`
    font-size: 2em;
`;
//TODO: add invalid input style and fix height
const ModalInput = styled.input`
    width: 100%;
    color: ${Colors.WHITE};
    background-color: ${Colors.SECONDARY_DARK};
    border: none;
    border-radius: 0.2rem;
    margin: 0.2em 0;
    padding: 0.5em 0;
`;
export {
    Modal,
    ModalWindow,
    ModalField,
    ModalCloseButton,
    ModalTitle,
    ModalInput,
    ModalFormFooter
};