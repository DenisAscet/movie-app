import {takeEvery, put, spawn , call} from "@redux-saga/core/effects";
import {fetchMovies} from "../slice/slice";

const fetchFilmsByGenre = async (genreID) => {

    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";
    const _fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genreID}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=`;

    const resp = [];

    for (let i =1 ; i <= 5 ; i++ ) {
        await fetch(_fetchURL + 1, {
            headers: {
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json"
            }
        })
            .then(data => data.json())
            .then(data => {
                for (const obj of data.items) {
                    resp.push(obj)
                }
            })
    }
    return resp ;
}

function* loadFilms (){
    const resp = call(fetchFilmsByGenre)
    yield put(fetchMovies(resp))
}

function* MoviesByGenresWorker() {
    yield spawn(loadFilms)
}

export function* MoviesByGenresWatcher (){
    takeEvery("FETCH_MOVIES_BY_GENRES",MoviesByGenresWorker)
}