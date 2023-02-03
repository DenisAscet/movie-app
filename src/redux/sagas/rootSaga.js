import {fork, all} from "redux-saga/effects"
import {dataWatcher} from "./fetchFilmData";
import {MoviesByGenresWatcher} from "./fetchFilmsByGenre";
import {genresWatcher} from "./fetchGenresSaga";
import {sagaWatcher} from "./MoviesSaga";

export const rootSaga = function* (){
    yield all([
            yield fork(dataWatcher),
            yield fork(MoviesByGenresWatcher),
            yield fork(genresWatcher),
            yield fork(sagaWatcher),
        ])
}