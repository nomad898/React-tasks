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
import { useCountRenders } from '@utils';

const MovieCard =(props) => {
    const [isEditMovieShown, setIsEditMovieShown] = useState(false);
    const [isDeleteMovieShown, setIsDeleteMovieShown] = useState(false);

    const handleCloseEditMovieModal = () => setIsEditMovieShown(false);
    const handleShowEditMovieModal = () => setIsEditMovieShown(true);
    const handleEditMovieSubmit = () => alert('Edited! Actually not...');

    const handleCloseDeleteMovieModal = () => setIsEditMovieShown(false);
    const handleShowDeleteMovieModal = () => setIsEditMovieShown(true);
    const handleDeleteMovieSubmit = () => alert('Edited! Actually not...');

    useCountRenders('MovieCard');

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
            <MovieCardImage src={props.movie.poster} onClick={() => props.onMovieClick(props.movie)} />
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
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.string,
        poster: PropTypes.string
    })
};

export { MovieCard };