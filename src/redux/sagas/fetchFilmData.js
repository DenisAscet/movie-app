import { put, takeEvery, call, spawn} from "@redux-saga/core/effects";
import { fetchMovieData } from "../slice/slice";
import {useSelector} from "react-redux";

export async function fetchFilmData (){

    const filmID = "600"
    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";

    const _url1 = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmID}/box_office`;
    const _url2 = `https://kinopoiskapiunofficial.tech/api/v2.2/films/500/awards`;
    const _url3 = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${filmID}`;
    const _url4 = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmID}`

    const resp = {}

    await fetch(_url1,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json",
                mode: 'no-cors'
            }
            }
        )
        .then(data => data.json())
        .then(data => resp.budget = data.items )

    await fetch(_url2,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json",
                mode: 'no-cors'
            }
            }
        )
        .then(data => data.json())
        .then(data => resp.awards = data.items)


    await fetch(_url3,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json",
                mode: 'no-cors'
            }
            }
        )
        .then(data => data.json())
        .then(data => {
            const stuff = []
            for (let i = 0 ; i < data.length; i++) {
                stuff[i] = {
                    "nameRu": data[i].nameRu,
                    "professionText": data[i].professionText
                }
            }
            return stuff
        })
        .then(stuff => resp.stuff = stuff )

    await fetch(_url4,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json",
                mode: 'no-cors'
            }
        }
    )
        .then(data => data.json())
        .then(data => resp.mainData = data)

    return resp
}

function* loadData () {
    const resp = yield call(fetchFilmData)
    yield put(fetchMovieData(resp))
}

function* dataWorker (){
    yield spawn(loadData)
}
export function* dataWatcher (){
    yield takeEvery("FETCH_FILM_DATA",dataWorker)
}
