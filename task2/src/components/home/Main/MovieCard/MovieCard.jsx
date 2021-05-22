import {
    useSelector,
    useDispatch
} from "react-redux";
import PropTypes from 'prop-types';
import {
    modalsSelector
} from '@stores/selectors';
import {
    moviesThunk
} from '@stores/thunks'
import {
    modalsAction
} from '@stores/actions';
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

const MovieCard = (
    {
        movie
    }) => {

    const dispatch = useDispatch();

    const showEditMovie = useSelector(modalsSelector.selectEditMovie);
    const showDeleteMovie = useSelector(modalsSelector.selectDeleteMovie);

    const handleShowEditMovieModal = () => {
        dispatch(modalsAction.showEditMovie({ show: true, movieId: movie.id }))
    };

    const handleShowDeleteMovieModal = () => {
        dispatch(modalsAction.showDeleteMovie({ show: true, movieId: movie.id }))
    };

    const getMovieId = () => {
        dispatch(moviesThunk.getMovie(movie.id));
    }

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
            <MovieCardImage src={movie.posterPath} onClick={getMovieId} />
            <MovieCardInfo>
                <MovieCardTitle>
                    {movie.title}
                </MovieCardTitle>
                <MovieCardReleaseDate>
                    {movie.releaseDate.getFullYear()}
                </MovieCardReleaseDate>
                <MovieCardGenres>
                    {movie.genres.join(', ')}
                </MovieCardGenres>
            </MovieCardInfo>
            {
                showEditMovie.show
                    && showEditMovie.movieId === movie.id
                    && <EditMovieModal movie={movie} />
            }
            {
                showDeleteMovie.show
                    && showDeleteMovie.movieId === movie.id
                    && <DeleteMovieModal movie={movie.id} />
            }
        </Wrapper>
    )
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.arrayOf(PropTypes.string),
        posterPath: PropTypes.string
    }).isRequired
};

export { MovieCard };