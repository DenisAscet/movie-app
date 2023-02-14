import { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { TableWithMovies } from "../../ui";
import {fetchMoviesByGenre} from "../../redux/sagas/actionCraetors";

export const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        // dispatch(fetchMoviesByGenre())
    },[]);

    const movies = useSelector(store => store.movies.movies);

    return(
        <TableWithMovies movies={movies} />
    )
}