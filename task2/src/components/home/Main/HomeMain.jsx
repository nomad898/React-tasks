import { useState, useEffect } from 'react';
import {
    Main,
} from '@components/global';
import {
    MovieCatalogFilter,
    MovieCatalog
} from '@components/home';
import { MovieService } from '@containers';

//TODO: make right order when real API
const HomeMain = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    //TODO: change state to const
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [activeSort, setActiveSort] = useState('TITLE');
    useEffect(async () => {
        const data = MovieService.getMovies();
        setMovies(data);
    });

    useEffect(async () => {
        const data = MovieService.getGenres();
        setGenres(data);
    });

    const handleFilterChange = (e) => {
        const filterValue = e.target.text;
        console.log(filterValue);
        setActiveFilter(filterValue);
    };

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        console.log(sortValue);
        setActiveSort(sortValue);
    }

    return (
        <Main>
            <MovieCatalogFilter
                genres={genres}
                activeFilter={activeFilter}
                onFilterClick={handleFilterChange}
                onSortChange={handleSortChange}
            />
            <MovieCatalog
                movies={movies}
                activeFilter={activeFilter}
                activeSort={activeSort}
            />
        </Main>
    )
};

export { HomeMain };