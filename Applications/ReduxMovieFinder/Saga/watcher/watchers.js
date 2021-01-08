import { takeEvery } from "redux-saga/effects";
import { workerForFetch } from "../workers";

export function* watchData(){
    yield takeEvery('search',workerForFetch);
}
