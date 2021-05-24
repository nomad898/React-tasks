import { MovieService } from '@containers';
import { moviesAction } from '@stores/actions';
import {
    CodeStyleType,
    FilterType,
    SortOrderType
} from '@utils/constants';

const getMovies = (options = {}) => async (dispatch, getState) => {
    const state = getState();
    if (!options.filter && state.params.filter != FilterType.ALL) {
        options.filter = state.params.filter;
    }
    if (!options.sortBy) {
        options.sortBy = state.params.sort;
        options.sortOrder = SortOrderType.ASC;
    }
    if (!options.search) {
        options.search = state.params.search;        
    }
    if (!options.searchBy) {
        options.searchBy = 'title';
    }
    const response = await MovieService.getMovies(options);
    if (response) {
        let payload = {
            data: response.data,
            total: response.total,
            offset: response.offset
        };
        const action = moviesAction.getMovies(payload);
        dispatch(action);
    }
};

const getMovie = (id) => async (dispatch) => {
    let movie = null
    if (id) {
        movie = await MovieService.getMovie(id);
    }
    const action = moviesAction.getMovie(movie);
    dispatch(action);
};

const addMovie = (movie) => async (dispatch) => {
    const response = await MovieService.addMovie(movie, CodeStyleType.SNAKE);
    if (response) {
        const action = moviesAction.addMovie(response);
        dispatch(action);
    }
};

const editMovie = (movie) => async (dispatch) => {
    const response = await MovieService.editMovie(movie, CodeStyleType.SNAKE);
    if (response) {
        const action = moviesAction.editMovie(response);
        dispatch(action);
    }
};

const deleteMovie = (id) => async (dispatch) => {
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