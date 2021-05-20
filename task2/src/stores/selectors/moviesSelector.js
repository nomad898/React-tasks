const selectMoviesCount = state => state.movies.data.length;
const selectTotal = state => state.movies.total;
const selectMovies = state => state.movies.data;
const selectMovie = state => state.movie;

const moviesSelector = {
    selectMoviesCount,
    selectTotal,
    selectMovies,
    selectMovie
}

export { moviesSelector };