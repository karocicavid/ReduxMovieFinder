import { applyMiddleware, combineReducers, createStore } from 'redux';
import {reducerForFavorite,reducerForSearch} from './reducer';
import thunk from "redux-thunk";
const rootReducer = combineReducers({fav:reducerForFavorite,search:reducerForSearch})
export let myStore = createStore(rootReducer,applyMiddleware(thunk));
