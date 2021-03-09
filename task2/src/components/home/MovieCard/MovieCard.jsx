import PropTypes from 'prop-types';
import { 
    MovieCard as Wrapper,
    MovieCardImage,
    MovieCardInfo,
    MovieCardTitle,
    MovieCardReleaseDate,
    MovieCardGenres
} from './MovieCard.styles';

const MovieCard = (props) => (
    <Wrapper>
        <MovieCardImage src={props.movie.poster}/>
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
    </Wrapper>
);

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.string,
        poster: PropTypes.string
    })
};

export { MovieCard };