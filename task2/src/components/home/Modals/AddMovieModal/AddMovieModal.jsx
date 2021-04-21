import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';
import { useCountRenders } from '@utils';

const AddMovieModal = (props) => {
    useCountRenders('Add Movie Modal');
    return (
        <Modal title="ADD MOVIE" onCloseClick={props.onCloseClick}>
            <form onSubmit={props.onSubmit}>
                <ModalInput text="TITLE" placeholder="Enter movie title" />
                <ModalInput text="RELEASE DATE" placeholder="Select Date" />
                <ModalInput text="MOVIE URL" placeholder="Movie URL here" />
                <ModalInput text="GENRE" placeholder="Select Genre" />
                <ModalInput text="OVERVIEW" placeholder="Overview here" />
                <ModalInput text="RUNTIME" placeholder="Runtime here" />
                <ModalFormFooter>
                    <ResetButton type="reset">
                        RESET
                </ResetButton>
                    <SubmitButton type="submit">
                        SUBMIT
                </SubmitButton>
                </ModalFormFooter>
            </form>
        </Modal>
    )
};

export { AddMovieModal };