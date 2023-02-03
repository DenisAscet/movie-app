import { Flex } from "../../ui";
import {LeftBlock} from "./components/LeftBlock";
import {MiddleBlock} from "./components/MiddleBlock";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {fetchFilmData} from "../../redux/sagas/fetchFilmData";
import {RightBlock} from "./components/RightBlock";

export const MoviePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: "FETCH_POPULAR_MOVIES"})
    }, [])


    const movies = useSelector(store => store.movies )

    const stuff = useSelector(store => store.movies.filmData.stuff)
    const budget = useSelector(store => store.movies.filmData.budget)
    const awards = useSelector(store => store.movies.filmData.awards)
    const posterUrl = useSelector(store => store.movies.filmData.mainData.posterUrl)
    const description = useSelector(store => store.movies.filmData.mainData.description)
    const filmLength = useSelector(store => store.movies.filmData.mainData.filmLength)
    const genres = useSelector(store => store.movies.filmData.mainData.genres)
    const name = useSelector(store => store.movies.filmData.mainData.nameRu)
    const ratingAgeLimits = useSelector(store => store.movies.filmData.mainData.ratingAgeLimits)
    const ratingImdb = useSelector(store => store.movies.filmData.mainData.ratingImdb)
    const ratingKinopoisk = useSelector(store => store.movies.filmData.mainData.ratingKinopoisk)
    const slogan = useSelector(store => store.movies.filmData.mainData.slogan)
    const year = useSelector(store => store.movies.filmData.mainData.year)

    const das = () => {
        console.log(movies)
    }

    setTimeout( das,5000)


    return(
        <Flex justifyContent="column">
            <LeftBlock>
                <img src={posterUrl} />
            </LeftBlock>
            <MiddleBlock>
                <Flex><div>name</div><p>{name}</p></Flex>
                <Flex><div>{description}</div></Flex>
                <Flex><div>filmLength</div><p>{filmLength}</p></Flex>
                <Flex><div>name</div><p>{name}</p></Flex>
                <Flex><div>ratingAgeLimits</div><p>{ratingAgeLimits}</p></Flex>
                <Flex><div>ratingImdb</div><p>{ratingImdb}</p></Flex>
                <Flex><div>ratingKinopoisk</div><p>{ratingKinopoisk}</p></Flex>
                <Flex><div>slogan</div><p>{slogan}</p></Flex>
                <Flex><div>year</div><p>{year}</p></Flex>

                <Flex><div>genres</div>
                    {
                        genres.map(genre => {
                            return (
                                <p>{genre.genre}</p>
                            )
                        })
                    }</Flex>
            </MiddleBlock>
            <RightBlock>
                <div>
                    <div>actors</div>
                    {stuff.map( person => {
                        if(stuff){
                            if (person.professionText === "Актеры" ){
                                console.log(person.nameRu)
                                return (
                                    <Flex>{person.nameRu}</Flex>
                                )
                            }
                        }

                    })
                }</div>
            </RightBlock>
        </Flex>
    )
}