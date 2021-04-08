import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';

//TODO: rewrite it after redux implementation. I hope it is possible to union this logic with AddModal
const EditMovieModal = (props) => (
    <Modal title="EDIT MOVIE" modalRef={props.modalRef} closeButtonRef={props.closeButtonRef} onCloseClick={props.onCloseClick}>
        <form onSubmit={props.onSubmit}>
            <ModalInput text="ID" placeholder="Movie ID" readonly={true} value={1} /> 
            <ModalInput text="TITLE" placeholder="Enter movie title" value={2} />
            <ModalInput text="RELEASE DATE" placeholder="Select Date" value={3} />
            <ModalInput text="MOVIE URL" placeholder="Movie URL here" value={4} />
            <ModalInput text="GENRE" placeholder="Select Genre" value={5} />
            <ModalInput text="OVERVIEW" placeholder="Overview here" value={6} />
            <ModalInput text="RUNTIME" placeholder="Runtime here" value={7} />
            <ModalFormFooter>
                <ResetButton type="reset">
                    RESET
                </ResetButton>
                <SubmitButton type="submit">
                    Save
                </SubmitButton>
            </ModalFormFooter>
        </form>
    </Modal>
);

export { EditMovieModal };