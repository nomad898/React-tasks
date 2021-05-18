import {
    useState,
    useEffect,
    useCallback,
    memo
} from 'react';
import {
    Main as Wrapper,
} from '@components/global';
import {
    MovieCatalogFilter,
    MovieCatalog
} from '@components/home';
import { MovieService } from '@containers';

// TODO: make right order when real API
const Main = memo((
    {
        onMovieClick
    }) => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    //TODO: change state to const
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [activeSort, setActiveSort] = useState('TITLE');

    const filterMovies = useCallback(
        (movies) => {
            return activeFilter === 'ALL' ?
                movies :
                movies
                    .filter(
                        movie => movie.genres
                            .split(', ')
                            .filter(genre => genre === activeFilter)
                            .length > 0);
        },
        [activeFilter]
    );

    const sortMovies = useCallback(
        (movies) => {
            return movies.sort((a, b) => {
                switch (activeSort) {
                    case 'RELEASE_DATE':
                        return b.releaseDate - a.releaseDate;
                    case 'TITLE':
                        return a.title.localeCompare(b.title);
                    default: 
                        return a > b;
                }
            });
        },
        [activeSort]
    );

    useEffect(() => {
        MovieService.getGenres()
            .then(g => setGenres(g));
    }, [activeFilter]);

    useEffect(() => {
        MovieService.getMovies()
            .then(m => {
                setMovies(sortMovies(filterMovies(m)));
            });
    }, [activeFilter, activeSort]);

    const handleFilterClick = (e) => {
        const filterValue = e.target.text;
        setActiveFilter(filterValue);
    };

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setActiveSort(sortValue);
    }

    return (
        <Wrapper>
            <MovieCatalogFilter
                genres={genres}
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
                onSortChange={handleSortChange}
            />
            <MovieCatalog
                movies={movies}
                onMovieClick={onMovieClick}
            />
        </Wrapper>
    )
});

export { Main };