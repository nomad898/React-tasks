import styled from 'styled-components';
import { Header, Footer } from '@components/global';
import { Colors } from '@utils'

const Modal = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: ${Colors.TRANSPARENT_DARK};
`;

const ModalForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 70%;
    max-width: 500px;
    max-height: 800px;
    background-color: ${Colors.PRIMARY_DARK};
`;

const ModalField = styled.div`
    padding: 1.2rem 10% 0 10%;
`;

const ModalSubfield = styled.div`
    padding: 0.5rem 0;
    display: flex;
`;

const ModalCloseButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    background-color: ${Colors.PRIMARY_DARK}
`;

const ModalText = styled.span`
    font-size: 2em;
`;
//TODO: add invalid input style and fix height
const ModalInput = styled.input`
    width: 100%;
    color: ${Colors.WHITE};
    background-color: ${Colors.SECONDARY_DARK};
    border: none;
    border-radius: 0.2rem;
    padding-left: 1.5em;
`;

const ModalHeader = styled.header`
    padding: 1em 10%;
`;

// TODO: fix it, this style does not work
const ModalFooter = styled(Footer)`
    position: absolute;
    width: 100%;
    bottom: 0;
`;

export {
    Modal,
    ModalForm,
    ModalField,
    ModalSubfield,
    ModalCloseButton,
    ModalText,
    ModalInput,
    ModalHeader,
    ModalFooter
};