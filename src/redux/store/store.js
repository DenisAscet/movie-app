import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {MovieSlice} from "../slice/slice";
import {createStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import {applyMiddleware} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootSaga} from "../sagas/rootSaga"

const rootReducer = combineReducers({
    movies: MovieSlice.reducer
})

export const configuredStore = initialState => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewareEnhancer = applyMiddleware(sagaMiddleware);

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(middlewareEnhancer)
        )

    sagaMiddleware.run(rootSaga)

    return store
}

