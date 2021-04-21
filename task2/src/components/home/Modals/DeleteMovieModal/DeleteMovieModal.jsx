import {
    Modal,
    ModalFormFooter,
    SubmitButton
} from '@components/global';

//TODO: pass data to component
const DeleteMovieModal = (props) => (
    <Modal title="DELETE MOVIE" onCloseClick={props.onCloseClick}>
        <form onSubmit={props.onSubmit}>
            Are you sure you want to delete this movie?
            <ModalFormFooter>
                <SubmitButton type="submit">
                    Confirm
                </SubmitButton>
            </ModalFormFooter>
        </form>
    </Modal>
);

export { DeleteMovieModal };