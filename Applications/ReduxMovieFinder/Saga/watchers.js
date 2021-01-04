import { takeEvery } from "redux-saga/effects";
import { workerLoad } from "./workers";

export function* watchData(){
    yield takeEvery('search',workerLoad);
}
