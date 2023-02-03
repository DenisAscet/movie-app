import { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { TableWithMovies } from "../../ui";
import {fetchMovies} from "../../redux/sagas/actionCraetors";
import {fetch100Films} from "../../redux/sagas/MoviesSaga";

export const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovies())
    },[]);

    const movies = useSelector(store => store.movies.movies);

    return(
        <TableWithMovies movies={movies}/>
    )
}