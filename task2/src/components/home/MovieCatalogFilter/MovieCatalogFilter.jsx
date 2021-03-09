import { MovieService } from '@containers';
import {
    MovieSort,
    MovieGenre,
    MovieGenreList,
    MovieSortDropdown
} from '@components/home'

const MovieCatalogFilter = () => (
    <MovieSort>
        <MovieGenreList>
            {
                MovieService
                    .getGenres()
                    .map((genre, idx) =>
                        idx === 0
                            ? <MovieGenre key={idx} genre={genre} isActive>
                                <span>{genre}</span>
                            </MovieGenre>
                            : <MovieGenre key={idx} genre={genre}>
                                <span>{genre}</span>
                            </MovieGenre>
                    )
            }
        </MovieGenreList>
        <MovieSortDropdown />
    </MovieSort>
);

export { MovieCatalogFilter };