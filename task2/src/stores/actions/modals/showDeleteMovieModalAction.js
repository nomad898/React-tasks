import { ActionType } from '@utils/constants';

const showDeleteMovieModalAction = (payload) => ({
    type: ActionType.SHOW_DELETE_MOVIE_MODAL,
    payload
});

export { showDeleteMovieModalAction };