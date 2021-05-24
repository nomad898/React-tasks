import {
    ActionType,
    FilterType,
    SortType
} from '@utils/constants';

const initialState = {
    filter: FilterType.ALL,
    sort: SortType.DEFAULT,
    search: '',
};

const paramsSlice = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.FILTER_CHANGE:
            return {
                ...state,
                filter: action.payload
            };
        case ActionType.SORT_CHANGE:
            return {
                ...state,
                sort: action.payload
            };
        case ActionType.SEARCH:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};

export { paramsSlice };