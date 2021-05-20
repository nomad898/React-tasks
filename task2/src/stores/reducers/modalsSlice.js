import {
    ActionType
} from '@utils/constants';

const initialState = {
    showAdd: false,
    showEdit: false,
    showDelete: false
};

const modalsSlice = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOW_ADD_MODAL:
            return {
                ...state,
                showAdd: action.payload
            };
        case ActionType.SHOW_EDIT_MODAL:
            return {
                ...state,
                showEdit: action.payload
            };
        case ActionType.SHOW_DELETE_MODAL:
            return {
                ...state,
                showDelete: action.payload
            };
        default:
            return state;
    }
};

export { modalsSlice };