import { getMoviesAction } from './getMoviesAction';
import { getMovieAction } from './getMovieAction';
import { addMovieAction } from './addMovieAction';
import { editMovieAction } from './editMovieAction';
import { deleteMovieAction } from './deleteMovieAction';

const moviesAction = {
    getMovies: getMoviesAction,
    getMovie: getMovieAction,
    addMovie: addMovieAction,
    editMovie: editMovieAction,
    deleteMovie: deleteMovieAction
};

export { moviesAction };