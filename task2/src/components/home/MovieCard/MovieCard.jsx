import {
    useState,
    useRef
} from 'react';
import PropTypes from 'prop-types';
import {
    EditMovieModal,
    DeleteMovieModal
} from '@components/home';
import {
    MovieCard as Wrapper,
    MovieCardImage,
    MovieCardInfo,
    MovieCardTitle,
    MovieCardReleaseDate,
    MovieCardGenres,
    MovieCardDropdownButton,
    MovieCardDropdownOption
} from './MovieCard.styles';

const MovieCard = (props) => {
    const [movie, setMovie] = useState(props.movie);

    const editMovieModalRef = useRef(null);
    const closeEditButtonRef = useRef(null);
    const [isEditMovieShown, setIsEditMovieShown] = useState(false);

    const deleteMovieModalRef = useRef(null);
    const closeDeleteButtonRef = useRef(null);
    const [isDeleteMovieShown, setIsDeleteMovieShown] = useState(false);

    const handleCloseEditMovieModal = () => setIsEditMovieShown(false);
    const handleShowEditMovieModal = () => setIsEditMovieShown(true);
    const handleEditMovieSubmit = () => alert('Edited! Actually not...');
    
    const handleCloseDeleteMovieModal = () => setIsDeleteMovieShown(false);
    const handleShowDeleteMovieModal = () => setIsDeleteMovieShown(true);
    const handleDeleteMovieSubmit = () => alert('Edited! Actually not...');

    return (
        <Wrapper>
            {/* //TODO: rewrite to dropdown with options. Please ignore names of the components. */}
            <MovieCardDropdownButton>
                <MovieCardDropdownOption onClick={handleShowEditMovieModal}>
                    Edit
            </MovieCardDropdownOption>
                <MovieCardDropdownOption onClick={handleShowDeleteMovieModal}>
                    Delete
            </MovieCardDropdownOption>
            </MovieCardDropdownButton>
            <MovieCardImage src={props.movie.poster} />
            <MovieCardInfo>
                <MovieCardTitle>
                    {props.movie.title}
                </MovieCardTitle>
                <MovieCardReleaseDate>
                    {props.movie.releaseDate.getFullYear()}
                </MovieCardReleaseDate>
                <MovieCardGenres>
                    {props.movie.genres}
                </MovieCardGenres>
            </MovieCardInfo>
            {
                isEditMovieShown && <EditMovieModal
                    onSubmit={handleEditMovieSubmit}
                    modalRef={editMovieModalRef}
                    closeButtonRef={closeEditButtonRef}
                    onCloseClick={handleCloseEditMovieModal}
                />
            }
            {
                isDeleteMovieShown && <DeleteMovieModal
                    onSubmit={handleDeleteMovieSubmit}
                    modalRef={deleteMovieModalRef}
                    closeButtonRef={closeDeleteButtonRef}
                    onCloseClick={handleCloseDeleteMovieModal}
                />
            }
        </Wrapper>
    )
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.string,
        poster: PropTypes.string
    })
};

export { MovieCard };