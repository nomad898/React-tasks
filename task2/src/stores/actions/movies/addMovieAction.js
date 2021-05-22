import { ActionType } from '@utils/constants';

const addMovieAction = (movie) => ({
    type: ActionType.ADD_MOVIE,
    payload: movie
});

export { addMovieAction };