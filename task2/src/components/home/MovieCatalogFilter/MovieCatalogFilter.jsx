import {
    MovieSort,
    MovieSortText,
    MovieSortDropdown,
    MovieGenre,
    MovieGenreList
} from '@components/home';
import { MovieCatalogFilter as Wrapper } from './MovieCatalogFilter.styles';

const MovieCatalogFilter = (props) => (
    <Wrapper>
        <MovieGenreList>
            {
                props.genres
                    .map((genre, idx) =>
                        <MovieGenre
                            href={`#${genre}`}
                            key={idx}
                            isActive={genre === props.activeFilter}
                            onClick={props.onFilterClick}
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
            <MovieSortDropdown onChange={props.onSortChange}>
                <option value="RELEASE_DATE">RELEASE DATE</option>
                <option value="TITLE">TITLE</option>
            </MovieSortDropdown>
        </MovieSort>
    </Wrapper>
);

export { MovieCatalogFilter };