import {  put , call } from "redux-saga/effects";



export function* workerForCheck (payload){
   const example =  yield call (fetchData(payload));
}