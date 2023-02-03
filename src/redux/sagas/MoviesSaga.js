import { put, takeEvery, call, spawn } from "@redux-saga/core/effects";
import { fetchMovies } from "../slice/slice"

export const fetch100Films = async () =>{

    const _apiKey=" 06e2167f-3fd2-4dd3-8779-305019796747 ";
    const _moviesURL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";

    let resp = [];

    for (let i = 1;i<6; i++ ) {
        await fetch(_moviesURL + i, {
                headers: {
                    "method": "GET",
                    "X-API-KEY": _apiKey,
                    "Content-type": "application/json"
                }
            }
        )
            .then(data => data.json())
            .then(data => {return data})
            .then(data => data.films.map (film => {resp.push(film)}))
    }
    return resp
}

function* load100Films (){
    const resp = yield call(fetch100Films)
    yield put(fetchMovies(resp))
}

function* sagaWorker (){
    yield spawn(load100Films)
}

export function* MovieWatcher(){
    yield takeEvery("FETCH_POPULAR_MOVIES", sagaWorker)
}