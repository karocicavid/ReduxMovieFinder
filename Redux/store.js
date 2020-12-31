import { applyMiddleware, combineReducers, createStore } from 'redux';
import {reducerForFavorite,reducerForSearch} from './reducer';
import thunk from "redux-thunk";
import { persistReducer,persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const rootReducer = combineReducers( { reducerForFavorite , reducerForSearch } )
const persistConfig = {
    key:'root',
    storage:AsyncStorage
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
export const myStore = createStore( persistedReducer , applyMiddleware( thunk ) );
export const mypersistor = persistStore(myStore);