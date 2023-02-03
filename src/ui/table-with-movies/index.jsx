import {Grid} from "./components/Grid";
import {useSelector, useDispatch} from "react-redux";
import { useEffect} from "react";
import {fetchPersonSaga} from "../../redux/sagas/fetchPersonSaga";
import {Flex} from "../styled-components/Flex";

export const TableWithMovies = ({movies}) => {

    return(
        <Grid movies={movies}>
            {
                movies.map(movie => {
                    if(movie.filmLength){
                        var filmLength = Number(movie.filmLength.slice(0,2)*60) + Number(movie.filmLength.slice(3))

                    }
                    if (movie.posterUrlPreview){
                        return(
                            <div key={movie.filmId}>
                                <img src={movie.posterUrlPreview} />
                                    <p>{movie.nameRu}</p>
                                    <h4>Длительность {filmLength} мин </h4>

                            </div>
                        )
                    }
                })
            }
        </Grid>
    )
}