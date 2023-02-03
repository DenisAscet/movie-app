import {put, takeEvery, call,spawn, select} from "@redux-saga/core/effects";
import {fetchFilmography, fetchPersonData} from "../slice/slice";
import {setFilmographyId} from "../slice/slice";

const filmographySaga = async arr => {

    const _ApiKey = "06e2167f-3fd2-4dd3-8779-305019796747"
    const _fetchFilmographyUrl ="https://kinopoiskapiunofficial.tech/api/v2.2/films/"

    const resp = []

    console.log(arr)

    for (let i = 0 ; i < arr.length - 1; i++ ){

        await fetch(_fetchFilmographyUrl + arr[i],{
                headers:{
                    "method": "GET",
                    "X-API-KEY": _ApiKey,
                    "Content-type": "application/json"
                }
            })
            .then(data => data.json())
            .then(data => resp.push(data))
    }
    console.log(resp)
    return resp
}

const fetchPersonSaga = async () => {

    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";
    const _fetchPersonUrl = `https://kinopoiskapiunofficial.tech/api/v1/staff/1`;
    let person = {};
    const filmography = []

    await fetch(_fetchPersonUrl,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json"
            }
        }
    )
        .then(data => data.json())
        .then(data => {
            person = data
            return data
        })
        .then(person => person.films.map(film => {filmography.push(film.filmId)}))

    console.log(person)
    return [
        person,
        filmography
    ]
}

function* loadFilmography() {
    const arr = yield call(fetchPersonSaga)

    yield put(setFilmographyId(arr[1]))

    const films = yield call(filmographySaga(arr[1]))

    yield put(fetchPersonData(arr[0]))
    yield put(fetchFilmography(films))
}

function* filmographyWorker(){
    yield spawn(loadFilmography)
}
export function* filmographyWatcher(){
    yield takeEvery("FETCH_PERSON",filmographyWorker)
}
