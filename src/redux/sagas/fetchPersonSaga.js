import {put,takeEvery, spawn,call} from "@redux-saga/core/effects";
import {fetchPersonData} from "../slice/slice";

export const fetchPersonSaga = async (stuffId) => {

    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";
    const _fetchUrl = `https://kinopoiskapiunofficial.tech/api/v1/staff/1`;
    let resp = {};

    await fetch(_fetchUrl,{
                headers:{
                    "method": "GET",
                    "X-API-KEY": _APIKey,
                    "Content-type": "application/json"
                }
            }
        )
        .then(data => data.json())
        .then(data => resp = data )
    // console.log(resp)
    return resp
}

function* loadPerson() {
    const resp = yield call(fetchPersonSaga);
    yield put(fetchPersonData(resp))
}

function* fetchPersonWorker(){
    yield spawn(loadPerson)
}

export function* fetchPersonWatcher() {
    yield takeEvery("FETCH_PERSON", fetchPersonWorker)
}