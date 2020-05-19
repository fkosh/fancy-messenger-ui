import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
);