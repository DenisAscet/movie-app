import { put, takeEvery, call, spawn} from "@redux-saga/core/effects";

export async function fetchFilmBudget (filmID){

    const _APIKey = "06e2167f-3fd2-4dd3-8779-305019796747";
    const _url1 = `https://kinopoiskapiunofficial.tech/api/v2.2/films/300/box_office`;
    const _url2 = `https://kinopoiskapiunofficial.tech/api/v2.2/films/500/awards`;
    const _url3 = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=500`;

    const resp = {}

    await fetch(_url1,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json"
            }
            }
        )
        .then(data => data.json())
        .then(data => resp.budget = data )

    await fetch(_url2,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json"
            }
            }
        )
        .then(data => data.json())
        .then(data => resp.awards = data)


    await fetch(_url3,{
            headers:{
                "method": "GET",
                "X-API-KEY": _APIKey,
                "Content-type": "application/json"
            }
            }
        )
        .then(data => data.json())
        .then(data => resp.stuff = data )

    console.log(resp)
}