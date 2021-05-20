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
    return (
        <Wrapper>
            <MovieCatalogFilter />
            <MovieCatalog
                onMovieClick={onMovieClick}
            />
        </Wrapper>
    )
});

export { Main };