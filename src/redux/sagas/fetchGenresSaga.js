import { put, takeEvery, spawn, call} from "@redux-saga/core/effects";
import { fetchGenres } from "../slice/slice"

const fetchGenresSaga = async () => {

    const _fetchURL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/filters";
    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";

    let resp = [] ;

    await fetch(_fetchURL, {
                headers:{
                    "method": "GET",
                    "X-API-KEY": _APIKey,
                    "Content-type": "application/json"
                }
            }
        )
        .then(data => data.json())
        .then(data => resp = data)

    return resp
}

function* loadGenres (){
    const resp = yield call(fetchGenresSaga)
    yield put (fetchGenres(resp))
}

function* genresWorker (){
    yield spawn(loadGenres)
}

export function* genresWatcher (){
    yield takeEvery("FETCH_GENRES", genresWorker)
}