import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import {
    Text,
    RedText
} from '@components/global';
import {
    Modal as Wrapper,
    ModalWindow,
    ModalField,
    ModalCloseButton,
    ModalTitle as Title,
    ModalInput as Input,
    ModalFormFooter
} from './Modal.styles';


const ModalInput = (
    {
       label, ...props
    }) => {

    const [field, meta, helpers] = useField(props);

    return (
        <ModalField>
            <RedText>{label}</RedText>
            <Input {...field} {...props}  />
            {
                meta.touched && meta.error
                    ? (<RedText>{meta.error}</RedText>) : null
            }
        </ModalField>
    );
};

ModalInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    readonly: PropTypes.bool
};

const ModalHeader = (
    {
        onCloseClick
    }) => (
    <ModalField>
        {
            onCloseClick ?
                <ModalCloseButton onClick={onCloseClick}>
                    <Text>X</Text>
                </ModalCloseButton> :
                <>
                </>
        }
    </ModalField>
);

const ModalTitle = (
    {
        textAlign,
        title
    }) => (
    <ModalField textAlign={textAlign}>
        <Title>{title}</Title>
    </ModalField>
);

ModalTitle.propTypes = {
    textAlign: PropTypes.string,
    title: PropTypes.string.isRequired
};

const Modal = (
    {
        onCloseClick,
        title,
        textAlign,
        children
    }) => {
    return createPortal(
        <Wrapper>
            <ModalWindow>
                <ModalHeader onCloseClick={onCloseClick} />
                {
                    title &&
                    <ModalTitle title={title} textAlign={textAlign} />
                }
                {children}
            </ModalWindow>
        </Wrapper>,
        document.body
    )
};

Modal.propTypes = {
    textAlign: PropTypes.string,
    title: PropTypes.string
};


export {
    Modal,
    ModalInput,
    ModalFormFooter
};