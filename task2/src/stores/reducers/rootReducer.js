import { combineReducers } from 'redux'
import { moviesSlice } from './moviesSlice';
import { modalsSlice } from './modalsSlice';
import { paramsSlice } from './paramsSlice';

const rootReducer = combineReducers({
    movies: moviesSlice,
    modals: modalsSlice,
    params: paramsSlice
});

export { rootReducer };