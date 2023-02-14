import {ageLimitReducer, Flex} from "../../ui";
import {LeftBlock,RightBlock,MiddleBlock} from "./components";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {StyledSelectedMovie} from "./styled";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import {setSelectedMovie, setSelectedPerson} from "../../redux/slice/slice";

export const MoviePage = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(setSelectedMovie(id))
        dispatch({ type: "FETCH_FILM_DATA"})
    }, [])

    const film = useSelector(store => store.movies.filmData)
    const stuff = useSelector(store => store.movies.filmData.stuff)
    const budget = useSelector(store => store.movies.filmData.budget)
    const posterUrl = useSelector(store => store.movies.filmData.mainData.posterUrl)
    const description = useSelector(store => store.movies.filmData.mainData.description)
    const filmLength = useSelector(store => store.movies.filmData.mainData.filmLength)
    const genres = useSelector(store => store.movies.filmData.mainData.genres)
    const name = useSelector(store => store.movies.filmData.mainData.nameRu)
    const ratingAgeLimits = useSelector(store => store.movies.filmData.mainData.ratingAgeLimits)
    const ratingKinopoisk = useSelector(store => store.movies.filmData.mainData.ratingKinopoisk)
    const year = useSelector(store => store.movies.filmData.mainData.year)

    return(

        <StyledSelectedMovie>

            <Flex justifyContent="column">

                <LeftBlock>
                    <img src={posterUrl} />
                </LeftBlock>

                <MiddleBlock>
                    <Flex ><h1>{name}</h1></Flex>
                    <Flex margin="2% 0"><div>Длительность:</div><p>{filmLength}</p><p> минут</p></Flex>
                    <Flex margin="2% 0"><div>Возрастное ограничение</div> <img src={ ageLimitReducer(ratingAgeLimits) } /></Flex>
                    <Flex margin="2% 0"><div>Рейтинг:</div><p>{ratingKinopoisk}</p></Flex>
                    <Flex margin="2% 0"><div>Год выхода:</div><p>{year}</p></Flex>
                    <Flex margin="2% 0"><div>Жанры:</div>
                        {
                            genres.map(genre => {
                                return (
                                    <p>{genre.genre}</p>
                                )
                            })
                        }
                    </Flex>
                    <Flex margin="2% 0"><div>Режиссер: </div>
                        {
                            stuff.map( person => {
                                if(stuff){
                                    if (person.professionText === "Режиссеры" ){
                                        return (
                                            <Link to={`/stuff/${person.personId}`}>
                                                <p onClick={() => dispatch(setSelectedPerson(person.personId)) }>
                                                    {person.nameRu}
                                                </p>
                                            </Link>
                                        )
                                    }
                                }

                            })
                        }
                    </Flex>
                    <Flex ><div>{description}</div></Flex>
                </MiddleBlock>

                <RightBlock>
                    <div>
                        <h2>Актеры</h2>
                        {stuff.map( person => {
                            if(stuff){
                                if (person.professionText === "Актеры" ){
                                    return (
                                        <Link to={`/stuff/${person.personId}`}>
                                            <div >
                                                <Flex >{person.nameRu}</Flex>
                                            </div>
                                        </Link>
                                    )
                                }
                            }
                        })
                    }</div>
                </RightBlock>

            </Flex>

        </StyledSelectedMovie>
    )
}