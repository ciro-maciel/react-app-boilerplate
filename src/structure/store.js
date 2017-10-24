// http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
// http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html#designing-a-normalized-state

// http://redux.js.org/docs/recipes/reducers/UpdatingNormalizedData.html
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from './reducers';
import epic from './epics';

// http://redux.js.org/docs/api/applyMiddleware.html#tips
// https://redux-observable.js.org/docs/api/createEpicMiddleware.html
const epicMiddleware = createEpicMiddleware(epic),
    middlewares = [epicMiddleware];

let store = null;

// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
	let { logger } = require('redux-logger');
    middlewares.push(logger);
} 
store = createStore(reducer, applyMiddleware(...middlewares))
console.log(store.getState())

export default store;