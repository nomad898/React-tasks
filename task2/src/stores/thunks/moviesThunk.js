import { MovieService } from '@containers';
import { moviesAction } from '@stores/actions';
import { 
    CodeStyleType,
    SortOrderType,
    SearchByType
} from '@utils/constants';

const getMovies = (options = {}) => async (dispatch, getState) => {
    const state = getState();
    const response = await MovieService.getMovies(options);
    if (response) {
        let payload = {
            movies: {
                data: response.data,
                totalAmount: response.totalAmount,
                offset: response.offset,
            },
            params: {
                filter: state.movies.params.filter,
                sort: state.movies.params.sort,
                search: state.movies.params.search
            }
        };
        if (options.filter) {
            payload.params.filter = options.filter
        }
        if (options.sortBy) {
            payload.params.sort = options.sortBy
        }
        if (options.search) {
            payload.params.search = options.search
        }
        const action = moviesAction.getMovies(payload);
        dispatch(action);
    }
};

const getMovie = (id) => async (dispatch, getState) => {
    const response = await MovieService.getMovie(id);
    if (response) {
        const action = moviesAction.getMovie(response);
        dispatch(action);
    }
};

const addMovie = (movie) => async (dispatch, getState) => {
    const response = await MovieService.addMovie(movie, CodeStyleType.SNAKE);
    if (response) {
        const action = moviesAction.addMovie(response);
        dispatch(action);
    }
};

const editMovie = (movie) => async (dispatch, getState) => {
    const response = await MovieService.editMovie(movie, CodeStyleType.SNAKE);
    if (response) {
        const action = moviesAction.editMovie(response);
        dispatch(action);
    }
};

const deleteMovie = (id) => async (dispatch, getState) => {
    const response = await MovieService.deleteMovie(id);
    if (response) {
        const action = moviesAction.deleteMovie(response);
        dispatch(action)
    }
};

const moviesThunk = {
    getMovies,
    getMovie,
    addMovie,
    editMovie,
    deleteMovie
};

export { moviesThunk };