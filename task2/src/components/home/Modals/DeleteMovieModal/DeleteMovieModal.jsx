import {
    useDispatch
} from "react-redux";
import {
    modalsAction
} from '@stores/actions';
import { moviesThunk } from '@stores/thunks';
import {
    Modal,
    ModalFormFooter,
    SubmitButton
} from '@components/global';

const DeleteMovieModal = ({ movie }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(modalsAction.showDeleteMovie({ show: false, movieId: null }));
    };

    const handleSubmit = () => {
        event.preventDefault();
        dispatch(moviesThunk.deleteMovie(movie));
        dispatch(moviesThunk.getMovies());
        dispatch(modalsAction.showDeleteMovie({ show: false, movieId: null }));        
    };

    return (
        <Modal title="DELETE MOVIE" onCloseClick={handleClose}>
            <form onSubmit={handleSubmit}>
                Are you sure you want to delete this movie?
                <ModalFormFooter>
                    <SubmitButton type="submit">
                        Confirm
                    </SubmitButton>
                </ModalFormFooter>
            </form>
        </Modal>
    );
}

export { DeleteMovieModal };