import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '@stores/reducers';

const middleware = [thunk, createLogger()];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export { store };