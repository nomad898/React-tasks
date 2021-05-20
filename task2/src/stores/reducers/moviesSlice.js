import {
    ActionType
} from '@utils/constants';

const initialState = {
    data: [],
    total: 0,
    offset: 0,
    movie: null
};

const moviesSlice = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case ActionType.GET_MOVIES:
            return {
                ...state,
                ...action.payload
            };
        case ActionType.ADD_MOVIE:
            return {
                ...state,
                movie: action.payload,
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

export { moviesSlice };