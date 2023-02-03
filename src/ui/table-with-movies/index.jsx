import {Grid} from "./components/Grid";
import {useSelector, useDispatch} from "react-redux";
import { useEffect} from "react";
import {fetchPersonSaga} from "../../redux/sagas/fetchPersonSaga";

export const PageWithMovies = () => {

    const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch("FETCH_POPULAR_MOVIES")
    // },[])
    //
    const movies = useSelector(state => state.movies.movies )
    fetchPersonSaga()
    return(
        <Grid>
            {
                movies.map(movie => {
                    if (movie.posterUrlPreview){
                        return(
                            <div>
                                <img src={movie.posterUrlPreview} />
                            </div>
                        )
                    }
                })
            }
        </Grid>
    )
}