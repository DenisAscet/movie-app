import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchFilmography, fetchPersonData} from "../../redux/sagas/actionCraetors";
import {StuffBlock} from "./components/StuffBlock";
import {StyledStuffPage} from "./styled";
import {TableWithMovies} from "../../ui";
import { setFilmographyId} from "../../redux/slice/slice";

export const StuffPage = ( ) => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch({type:"FETCH_PERSON"})
    },[])

    const person  = useSelector(store => store.movies.personData )

    const _filmography = useSelector(store => store.movies.filmography)
    console.log(_filmography)


    return(
        <StyledStuffPage>
            <StuffBlock>

            </StuffBlock>
            {/*<TableWithMovies movies={person.films}/>*/}
        </StyledStuffPage>
    )
}