import {
    useState
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

const MovieCard = (
    {
        movie,
        onClick
    }) => {
    const [isEditMovieShown, setIsEditMovieShown] = useState(false);
    const [isDeleteMovieShown, setIsDeleteMovieShown] = useState(false);

    const handleCloseEditMovieModal = () => setIsEditMovieShown(false);
    const handleShowEditMovieModal = () => setIsEditMovieShown(true);
    const handleEditMovieSubmit = () => alert('Edited! Actually not...');

    const handleCloseDeleteMovieModal = () => setIsEditMovieShown(false);
    const handleShowDeleteMovieModal = () => setIsEditMovieShown(true);
    const handleDeleteMovieSubmit = () => alert('Deleted! Actually not...');

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
            <MovieCardImage src={movie.posterPath} onClick={() => onClick(movie)} />
            <MovieCardInfo>
                <MovieCardTitle>
                    {movie.title}
                </MovieCardTitle>
                <MovieCardReleaseDate>
                    {new Date(movie.releaseDate).getFullYear()}
                </MovieCardReleaseDate>
                <MovieCardGenres>
                    {movie.genres.join(', ')}
                </MovieCardGenres>
            </MovieCardInfo>
            {
                isEditMovieShown && <EditMovieModal
                    onSubmit={handleEditMovieSubmit}
                    onCloseClick={handleCloseEditMovieModal}
                />
            }
            {
                isDeleteMovieShown && <DeleteMovieModal
                    onSubmit={handleDeleteMovieSubmit}
                    onCloseClick={handleCloseDeleteMovieModal}
                />
            }
        </Wrapper>
    )
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        poster: PropTypes.string
    })
};

export { MovieCard };