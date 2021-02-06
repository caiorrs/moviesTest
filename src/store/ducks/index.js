import { combineReducers } from 'redux';
import AppReducer from './app';
import MoviesReducer from './movies';

export default combineReducers({ AppReducer, MoviesReducer });
