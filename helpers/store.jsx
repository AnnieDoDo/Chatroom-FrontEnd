
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "../reducers/index.jsx";
import logger from 'redux-logger'
import { createLogger } from 'redux-logger';
import { history } from './history.jsx'

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer(history),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

