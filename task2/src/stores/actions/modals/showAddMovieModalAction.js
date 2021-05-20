import { ActionType } from '@utils/constants';

const showAddMovieModalAction = (payload) => ({
    type: ActionType.SHOW_ADD_MOVIE_MODAL,
    payload
});

export { showAddMovieModalAction };