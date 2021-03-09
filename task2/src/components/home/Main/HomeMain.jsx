import {
    Main,
    BoldText,
} from '@components/global';
import {
    MovieCatalogFilter,
    MovieCatalogCounter,
    MovieCatalog
} from '@components/home'

const HomeMain = () => (
    <Main>
        <MovieCatalogFilter />
        <MovieCatalogCounter>
            <BoldText>9</BoldText><span> movies found</span>
        </MovieCatalogCounter>
        <MovieCatalog />
    </Main>
);

export { HomeMain };