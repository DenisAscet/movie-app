import { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { TableWithMovies } from "../../ui";
import {fetchMovies, fetchMoviesByGenre} from "../../redux/sagas/actionCraetors";
import {fetchMovieData} from "../../redux/slice/slice";

export const MoviesByGenrePage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMoviesByGenre())
    },[]);

    const movies = useSelector(store => store.movies.movies);
    console.log(movies)

    return(
        <TableWithMovies movies={movies} />
    )
}