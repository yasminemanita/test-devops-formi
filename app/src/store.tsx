// import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers/index";
// import thunk from "redux-thunk";
// import logger from "redux-logger"
// console.log(rootReducer)
// const store=createStore(
//     rootReducer,
//     applyMiddleware(thunk,logger)  
//       )
// export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
// middlewares
import promiseMiddleware from 'redux-promise-middleware';
import {  createLogger } from 'redux-logger'
import thunk from "redux-thunk";
// DevTool
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, promiseMiddleware))
)

    export default store;
    // export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, promiseMiddleware)));