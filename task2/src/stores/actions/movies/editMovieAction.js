import { ActionType } from '@utils/constants';

const editMovieAction = (movie) => ({
    type: ActionType.EDIT_MOVIE,
    payload: movie
});

export { editMovieAction };