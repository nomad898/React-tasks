import PropTypes from 'prop-types';
import { BoldText } from '@components/global';
import {
    MovieCard,
    MovieCatalogCounter
} from '@components/home';
import { MovieCatalog as Wrapper } from './MovieCatalog.styles';

const MovieCatalog = (props) => {

    //TODO: rewrite it with real API data. Hardcoded :(
    const activeFilter = props.activeFilter.toLowerCase();
    const movies = (props.activeFilter === 'ALL' ?
        props.movies :
        props.movies
            .filter(
                movie => movie.genres
                    .split(', ')
                    .filter(genre => genre === activeFilter)
                    .length > 0))
        .sort((a, b) => {
            switch (props.activeSort) {
                case 'RELEASE_DATE':
                    return b.releaseDate - a.releaseDate;
                case 'TITLE':
                    return a.title.localeCompare(b.title);
            }
        });

    return (
        <>
            <MovieCatalogCounter>
                <span>
                    <BoldText>{movies.length}</BoldText> movies found
                </span>
            </MovieCatalogCounter>
            <Wrapper>
                {
                    movies
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