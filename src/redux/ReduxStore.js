import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import loaderReducer from './Loaders';
import covidReducer from './Covid';

const rootReducer = combineReducers({
  countriesData: covidReducer,
  loader: loaderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
