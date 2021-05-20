import { ActionType } from '@utils/constants';

const getMoviesAction = (payload) => ({
    type: ActionType.GET_MOVIES,
    payload
});

export { getMoviesAction };