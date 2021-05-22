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

const Main = memo(() => {
    return (
        <Wrapper>
            <MovieCatalogFilter />
            <MovieCatalog />
        </Wrapper>
    )
});

export { Main };