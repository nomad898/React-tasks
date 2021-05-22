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
            <MovieDetailsImage src={movie.posterPath} />
        </MovieDetailsImageCol>
        <MovieDetailsInfoCol>
            <MovieDetailsTitleRow>
                <MovieDetailsTitle>
                    {movie.title}
                </MovieDetailsTitle>
                <MovieDetailsRating>
                    <span>
                        {movie.voteAverage}
                    </span>
                </MovieDetailsRating>
            </MovieDetailsTitleRow>
            <MovieDetailsInfoRow>
                <Text>
                    {movie.genres.join(', ')}
                </Text>
            </MovieDetailsInfoRow>
            <MovieDetailsInfoRow>
                <RedText>
                    {movie.releaseDate.getFullYear()}
                </RedText>
                <MovieDetailsDurationText>
                    {movie.runtime} min
                </MovieDetailsDurationText>
            </MovieDetailsInfoRow>
            <MovieDetailsInfoRow>
                <MovieDetailsDescription>
                    {movie.overview}
                </MovieDetailsDescription>
            </MovieDetailsInfoRow>
        </MovieDetailsInfoCol>
    </Wrapper>
);

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.arrayOf(PropTypes.string),
        posterPath: PropTypes.string,
        voteAverage: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired
    }).isRequired
};

export { MovieDetails }