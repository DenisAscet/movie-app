import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {StyledStuffPage} from "./styled";
import {Flex, TableWithMovies} from "../../ui";
import {StuffImage,StuffInfoBlock, StuffBlock} from "./components";
import {fetchPersonData} from "../../redux/sagas/actionCraetors";
import {useParams} from "react-router";
import {setSelectedPerson} from "../../redux/slice/slice";

export const StuffPage = ( ) => {

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect( () => {
        dispatch(setSelectedPerson(id))
        dispatch(fetchPersonData())
    },[])

    const person  = useSelector(store => store.movies.personData )

    const movies = useSelector(store => store.movies.filmography)

    if(movies.length>=1){
        return(
            <StyledStuffPage>
                <StuffBlock />
                    <Flex margin="0 13%">
                        <StuffImage src={ person.posterUrl } />
                        <StuffInfoBlock>
                            <h1>{person.nameRu}</h1>
                            <div>Карьера: {person.profession}</div>
                            <div>Место рождения: {person.birthplace}</div>
                        </StuffInfoBlock>
                    </Flex>
                <StuffBlock />
                <TableWithMovies movies={movies} blockName="Фильмография"/>
            </StyledStuffPage>
        )
    }

}