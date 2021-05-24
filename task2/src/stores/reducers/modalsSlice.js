import {
    ActionType
} from '@utils/constants';

const initialState = {
    showAddMovie: false,
    showEditMovie: { show: false, movieId: null },
    showDeleteMovie: { show: false, movieId: null },
};

const modalsSlice = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOW_ADD_MOVIE_MODAL:
            return {
                ...state,
                showAddMovie: action.payload
            };
        case ActionType.SHOW_EDIT_MOVIE_MODAL:
            return {
                ...state,
                showEditMovie: action.payload
            };
        case ActionType.SHOW_DELETE_MOVIE_MODAL:
            return {
                ...state,
                showDeleteMovie: action.payload
            };
        default:
            return state;
    }
};

export { modalsSlice };