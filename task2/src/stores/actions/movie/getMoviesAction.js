import { ActionType } from '@utils/constants';

const getMoviesAction = (payload) => ({
    type: ActionType.GET_MOVIES,
    payload: {
        movies: payload.movies,
        params: payload.params
    },
});

export { getMoviesAction };