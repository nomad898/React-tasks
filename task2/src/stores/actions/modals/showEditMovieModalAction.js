import { ActionType } from '@utils/constants';

const showEditMovieModalAction = (payload) => ({
    type: ActionType.SHOW_EDIT_MOVIE_MODAL,
    payload
});

export { showEditMovieModalAction };