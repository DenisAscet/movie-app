import {Grid} from "./components/Grid";
import {setSelectedMovie} from "../../redux/slice/slice";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

export const TableWithMovies = ( props ) => {

    const movies = props.movies;
    const dispatch = useDispatch()

    return(
        <Grid movies={ movies }>
            <h1>{props.blockName}</h1>
            <div></div>
            <div></div>
            {
                movies.map( movie => {
                    if ( movie.posterUrlPreview ){
                        return(
                            <Link to={`/movies/${movie.filmId}`}
                                  key={ movie.filmId }>
                                <div >
                                    <img src={ movie.posterUrlPreview } />
                                        <p>{ movie.nameRu }</p>
                                </div>
                            </Link>
                        )
                    }
                })
            }
        </Grid>
    )
}