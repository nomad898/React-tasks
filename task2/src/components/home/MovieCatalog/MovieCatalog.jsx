import PropTypes from 'prop-types';
import { BoldText } from '@components/global';
import {
    MovieCard,
    MovieCatalogCounter
} from '@components/home';
import { MovieCatalog as Wrapper } from './MovieCatalog.styles';

const MovieCatalog = (props) => {
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