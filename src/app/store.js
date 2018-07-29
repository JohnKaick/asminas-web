import reducers from './reducers'

import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger()

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        loggerMiddleware
    )
)