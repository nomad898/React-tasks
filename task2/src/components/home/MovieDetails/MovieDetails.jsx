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

const MovieDetails = (props) => (
    <Wrapper>
        <MovieDetailsImageCol>
            <MovieDetailsImage src={props.movie.poster} />
        </MovieDetailsImageCol>
        <MovieDetailsInfoCol>
            <MovieDetailsTitleRow>
                <MovieDetailsTitle>
                    {props.movie.title}
                </MovieDetailsTitle>
                <MovieDetailsRating>
                    <span>
                        {props.movie.rating}
                    </span>
                </MovieDetailsRating>
            </MovieDetailsTitleRow>
            <MovieDetailsInfoRow>
                <Text>
                    {props.movie.genres}
                </Text>
            </MovieDetailsInfoRow>
            <MovieDetailsInfoRow>
                <RedText>
                    {props.movie.releaseDate.getFullYear()}
                </RedText>
                <MovieDetailsDurationText>
                    {props.movie.duration} min
                </MovieDetailsDurationText>
            </MovieDetailsInfoRow>
            <MovieDetailsInfoRow>
                <MovieDetailsDescription>
                    {props.movie.description}
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