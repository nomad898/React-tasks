import { MovieSearchButton } from './MovieSearchButton.styles';
import { MovieSearchInput } from './MovieSearchInput.styles';

const MovieSearch = () => (
    <>
        <MovieSearchInput placeholder="What do you want to watch?" />
        <MovieSearchButton>
            SEARCH
        </MovieSearchButton>
    </>
);

export { MovieSearch };