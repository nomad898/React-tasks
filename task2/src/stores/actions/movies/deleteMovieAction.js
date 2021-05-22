import { ActionType } from '@utils/constants';

const deleteMovieAction = (movie) => ({
    type: ActionType.DELETE_MOVIE,
    payload: movie
});

export { deleteMovieAction };