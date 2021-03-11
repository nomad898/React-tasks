import {
    AppTitle,
    Text,
    BoldText,
    RedText
} from '@components/global';
import {
    Modal as Wrapper,
    ModalForm,
    ModalField,
    ModalSubfield,
    ModalCloseButton,
    ModalText,
    ModalInput as Input,
    ModalHeader,
    ModalFooter
} from './Modal.styles';

const ModalInput = (props) => (
    <ModalField>
        <ModalSubfield>
            <RedText>{props.text}</RedText>
        </ModalSubfield>
        <ModalSubfield>
            <Input placeholder={props.placeholder}></Input>
        </ModalSubfield>
    </ModalField>
);

const Modal = (props) => (
    <Wrapper>
        <ModalHeader>
            <AppTitle />
        </ModalHeader>
        <ModalForm>
            <ModalField>
                <ModalCloseButton>
                    <Text>X</Text>
                </ModalCloseButton>
            </ModalField>
            <ModalField>
                <ModalText>ADD MOVIE</ModalText>
            </ModalField>
            <ModalInput text="TITLE" placeholder="Enter movie title" />
            <ModalInput text="RELEASE DATE" placeholder="Select Date" />
            <ModalInput text="MOVIE URL" placeholder="Movie URL here" />
            <ModalInput text="GENRE" placeholder="Select Genre" />
            <ModalInput text="OVERVIEW" placeholder="Overview here" />
            <ModalInput text="RUNTIME" placeholder="Runtime here" />
        </ModalForm>
        <ModalFooter />
    </Wrapper>
);

export { Modal };