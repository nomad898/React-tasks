import { MovieService } from '@containers';
import { MovieCard } from '@components/home'
import { MovieCatalog as Wrapper } from './MovieCatalog.styles';

//TODO: DELETE IT and replace using CSS FLEX
const MovieCatalog = () => (
    <Wrapper>
        {
            MovieService
                .getMovies()
                .map((movie, idx) =>
                    <MovieCard key={idx} movie={movie} />
                )
        }
    </Wrapper>
);

export { MovieCatalog };