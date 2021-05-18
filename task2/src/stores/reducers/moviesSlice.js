import {
    ActionType,
    FilterType,
    SortType
} from '@utils/constants';

const initialState = {
    movies: {
        data: [],
        total: 0,
        offset: 0
    },
    movie: null,
    params: {
        filter: FilterType.ALL,
        sort: SortType.DEFAULT,
        search: '',
    }
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case ActionType.GET_MOVIES:
            return {
                ...state,
                movies: {
                    data: action.payload.movies.data,
                    total: action.payload.movies.totalAmount,
                    offset: action.payload.movies.offset
                },
                params: {
                    filter: action.payload.params.filter,
                    sort: action.payload.params.sort,
                    search: action.payload.params.search
                }
            };
        case ActionType.ADD_MOVIE:
            const movies = [action.payload, ...state.movies.data];
            return {
                ...state,
                movie: action.payload,
                movies: {
                    ...state.movies,
                    data: movies
                }
            };
        case ActionType.EDIT_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        case ActionType.DELETE_MOVIE:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
};

export { moviesReducer };