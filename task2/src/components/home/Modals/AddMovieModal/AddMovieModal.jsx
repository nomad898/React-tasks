import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';

const AddMovieModal = (
    {
        onCloseClick,
        onSubmit
    }) => (
    <Modal title="ADD MOVIE" onCloseClick={onCloseClick}>
        <form onSubmit={onSubmit}>
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
);

export { AddMovieModal };