import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';

//TODO: rewrite it after redux implementation. I hope it is possible to union this logic with AddModal
const EditMovieModal = (props) => (
    <Modal title="EDIT MOVIE" onCloseClick={props.onCloseClick}>
        <form onSubmit={props.onSubmit}>
            <ModalInput text="ID" placeholder="Movie ID" readonly={true} defaultValue={"1"} /> 
            <ModalInput text="TITLE" placeholder="Enter movie title" defaultValue={"1"} />
            <ModalInput text="RELEASE DATE" placeholder="Select Date" defaultValue={"1"} />
            <ModalInput text="MOVIE URL" placeholder="Movie URL here" defaultValue={"1"} />
            <ModalInput text="GENRE" placeholder="Select Genre" defaultValue={"1"} />
            <ModalInput text="OVERVIEW" placeholder="Overview here" defaultValue={"1"} />
            <ModalInput text="RUNTIME" placeholder="Runtime here" defaultValue={"1"} />
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