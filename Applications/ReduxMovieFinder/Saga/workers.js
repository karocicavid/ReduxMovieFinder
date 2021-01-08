import {  put , call } from "redux-saga/effects";
import { fromSaga } from '../Redux/action';

export const fetchData = (payload) =>{
    console.log('data is -',payload.payload)
    return async()=> {
        try{
            const response = await fetch('http://api.tvmaze.com/search/shows?q=' + payload.payload);
            return await response.json();
        } 
        catch (e){
        console.log('error')
        }
    }
}

export function* workerLoad (payload){
   const example =  yield call (fetchData(payload));
   yield put(fromSaga(example))
}

