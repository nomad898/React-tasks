import {
    MovieSort,
    MovieSortText,
    MovieSortDropdown,
    MovieGenre,
    MovieGenreList
} from '@components/home';
import { MovieCatalogFilter as Wrapper } from './MovieCatalogFilter.styles';

const MovieCatalogFilter = (
    {
        genres,
        activeFilter,
        onFilterClick,
        onSortChange
    }) => (
    <Wrapper>
        <MovieGenreList>
            {
                genres
                    .map((genre, idx) =>
                        <MovieGenre
                            href={`#${genre}`}
                            key={idx}
                            isActive={genre === activeFilter}
                            onClick={onFilterClick}
                        >
                            {genre}
                        </MovieGenre>
                    )
            }
        </MovieGenreList>
        <MovieSort>
            <MovieSortText>
                SORT BY
            </MovieSortText>
            <MovieSortDropdown onChange={onSortChange}>
                <option value="RELEASE_DATE">RELEASE DATE</option>
                <option value="TITLE">TITLE</option>
            </MovieSortDropdown>
        </MovieSort>
    </Wrapper>
);

export { MovieCatalogFilter };