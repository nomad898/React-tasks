import PropTypes from 'prop-types';
import { BoldText } from '@components/global';
import {
    MovieCard,
    MovieCatalogCounter
} from '@components/home';
import { MovieCatalog as Wrapper } from './MovieCatalog.styles';
import { useCountRenders } from '@utils';

const MovieCatalog = (props) => {

    useCountRenders('MovieCatalog');

    return (
        <>
            <MovieCatalogCounter>
                <span>
                    <BoldText>{props.movies.length}</BoldText> movies found
            </span>
            </MovieCatalogCounter>
            <Wrapper>
                {
                    props.movies
                        .map((movie, idx) =>
                            <MovieCard
                                key={idx}
                                movie={movie}
                                onMovieClick={props.onMovieClick}
                            />
                        )
                }
            </Wrapper>
        </>
    )
};

MovieCatalog.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        genres: PropTypes.string,
        poster: PropTypes.string
    }))
};

export { MovieCatalog };