import {
    Modal,
    ModalFormFooter,
    SubmitButton
} from '@components/global';

//TODO: pass data to component
const DeleteMovieModal = (props) => (
    <Modal title="DELETE MOVIE" modalRef={props.modalRef} closeButtonRef={props.closeButtonRef} onCloseClick={props.onCloseClick}>
        <form>
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