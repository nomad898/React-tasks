import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';

const EditMovieModal = (
    {
        onCloseClick,
        onSubmit
    }) => (
    <Modal title="EDIT MOVIE" onCloseClick={onCloseClick}>
        <form onSubmit={onSubmit}>
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