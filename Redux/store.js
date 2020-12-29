import { createStore } from 'redux';
import {reducerForFavorite} from './reducer';

export let myStore = createStore(reducerForFavorite);
