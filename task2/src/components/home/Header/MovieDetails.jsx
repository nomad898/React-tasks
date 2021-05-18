import PropTypes from 'prop-types';
import {
    Text,
    RedText
} from '@components/global';
import {
    MovieDetails as Wrapper,
    MovieDetailsImageCol,
    MovieDetailsInfoCol,
    MovieDetailsInfoRow,
    MovieDetailsTitleRow,
    MovieDetailsImage,
    MovieDetailsTitle,
    MovieDetailsRating,
    MovieDetailsDurationText,
    MovieDetailsDescription,
} from './MovieDetails.styles';

const MovieDetails = (
    {
        movie
    }) => (
    <Wrapper>
        <MovieDetailsImageCol>
            <MovieDetailsImage src={movie.poster} />
        </MovieDetailsImageCol>
        <MovieDetailsInfoCol>
            <MovieDetailsTitleRow>
                <MovieDetailsTitle>
                    {movie.title}
                </MovieDetailsTitle>
                <MovieDetailsRating>
                    <span>
                        {movie.rating}
                    </span>
                </MovieDetailsRating>
            </MovieDetailsTitleRow>
            <MovieDetailsInfoRow>
                <Text>
                    {movie.genres}
                </Text>
            </MovieDetailsInfoRow>
            <MovieDetailsInfoRow>
                <RedText>
                    {movie.releaseDate.getFullYear()}
                </RedText>
                <MovieDetailsDurationText>
                    {movie.duration} min
                </MovieDetailsDurationText>
            </MovieDetailsInfoRow>
            <MovieDetailsInfoRow>
                <MovieDetailsDescription>
                    {movie.description}
                </MovieDetailsDescription>
            </MovieDetailsInfoRow>
        </MovieDetailsInfoCol>
    </Wrapper>
);

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.string,
        poster: PropTypes.string,
        rating: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })
};

export { MovieDetails }