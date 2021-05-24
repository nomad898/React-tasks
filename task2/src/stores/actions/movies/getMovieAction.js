import { ActionType } from '@utils/constants';

const getMovieAction = (movie) => ({
    type: ActionType.GET_MOVIE,
    payload: movie
});

export { getMovieAction };