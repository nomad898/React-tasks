import {
    useEffect,
    useCallback
} from 'react';
import {
    connect,
    useSelector,
    useDispatch
} from "react-redux";
import PropTypes from 'prop-types';
import { moviesThunk } from '@stores/thunks';
import {
    moviesSelector,
    paramsSelector
} from '@stores/selectors';
import { BoldText } from '@components/global';
import {
    MovieCard,
    MovieCatalogCounter
} from '@components/home';
import { MovieCatalog as Wrapper } from './MovieCatalog.styles';

const MovieCatalog = ({ onMovieClick, getMovies }) => {
    const sort = useSelector(paramsSelector.selectSort);
    const filter = useSelector(paramsSelector.selectFilter);
    const movies = useSelector(moviesSelector.selectMovies);
    const total = useSelector(moviesSelector.selectTotal);

    useEffect(() => {
        getMovies();
    }, [sort, filter]);

    return (
        <>
            <MovieCatalogCounter>
                <span>
                    <BoldText>{total}</BoldText> movies found
                </span>
            </MovieCatalogCounter>
            <Wrapper>
                {
                    movies
                        .map((movie, idx) =>
                            <MovieCard
                                key={idx}
                                movie={movie}
                                onClick={onMovieClick}
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

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(moviesThunk.getMovies())
    }
}

export default connect(null, mapDispatchToProps)(MovieCatalog);