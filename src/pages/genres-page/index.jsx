import {useDispatch, useSelector} from "react-redux";
import {GenreImage } from "./components";
import {useEffect} from "react";
import {fetchGenres} from "../../redux/sagas/actionCraetors";
import {genresImageReducer} from "../../ui/imageReducers/genresImageReducer";
import {Grid} from "./components";

export const GenresPage = ( ) => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     fetchGenres()
    // }, [])

    let genres = [...useSelector(state => state.movies.genres.genres ) ]
    return(
        <>

            <Grid>
                <h1>Жанры</h1>
                <div></div>
                <div></div>
                <div></div>
                {
                    genres.map(genre => {
                        if (genresImageReducer(genre.genre)){
                            return(
                                <div key={genre.id}>
                                    <GenreImage src={genresImageReducer(genre.genre)} />
                                    <p>{ genre.genre.slice(0,1).toUpperCase() + genre.genre.slice(1) }</p>
                                </div>
                            )
                        }
                    })
                }
            </Grid>
        </>

    )
}