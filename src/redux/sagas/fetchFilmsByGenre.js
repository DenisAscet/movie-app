import {takeEvery, put, spawn, call, select} from "@redux-saga/core/effects";
import {fetchMovies} from "../slice/slice";
import {useSelector} from "react-redux";

const fetchFilmsByGenre = async (genreID) => {

    console.log(genreID)

    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";
    const _fetchURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genreID}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=`;

    const resp = [];

    for (let i=1 ; i <= 5 ; i++ ) {
        await fetch(_fetchURL+`${i}`, {
            headers: {
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json"
            }
        })
            .then(data => data.json())
            .then(data => {
                for (const obj of data.items) {
                    obj.filmId = obj.kinopoiskId
                }
                console.log(data)
                return data
            })
            .then(data => {
                for (const obj of data.items) {
                    resp.push(obj)
                }
            })
    }
    return resp ;
}

function* loadFilms (){
    const genre = yield select(store => store.movies.selectedGenre)
    const resp = yield fetchFilmsByGenre(genre)
    yield put(fetchMovies(resp))
}

function* MoviesByGenresWorker() {
    yield spawn(loadFilms)

}

export function* MoviesByGenresWatcher (){
    yield takeEvery("FETCH_MOVIES_BY_GENRES", MoviesByGenresWorker)

}