const selectMoviesCount = state => state.movies.length;
const selectMovies = state => state.movies;
const selectMovie = state => state.movie;

const moviesSelector = {
    selectMoviesCount,
    selectMovies,
    selectMovie
}

export { moviesSelector };