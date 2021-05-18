import { MovieService } from '@containers';
import {
    moviesAction,
    filtersAction
} from '@stores/actions';
import {
    FilterType
} from '@utils/constants';

const SortOrderType = {
    ASC: 'asc',
    DESC: 'desc'
};

const filter = (options) => async (dispatch, getState) => {
    if (options) {
        const state = getState();
        if (state.filters.sort) {
            options.sortBy = state.filters.sort;
            options.sortOrder = SortOrderType.ASC;
        }
        const response = await MovieService.getMovies(options);
        if (response) {
            const action = filtersAction.changeFilter(response.data);
            dispatch(action);
        }
    }
};

const sort = (
    sortBy,
    sortOrder = SortOrderType.ASC
) => async (dispatch, getState) => {
    const options = {
        sortBy: sortBy,
        sortOrder: sortOrder
    };
    const state = getState();
    if (state.filters.filter && state.filters.filter !== FilterType.ALL) {
        options.filter = state.filters.filter;
    }
    const response = await MovieService.getMovies(options);
    if (response) {
        const action = moviesAction.getMovies(response);
        dispatch(action);
    }
};

const filtersThunk = {
    filter,
    sort
};

export { filtersThunk };