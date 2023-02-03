export const fetchMovies = () => ( { type:"FETCH_POPULAR_MOVIES" } );
export const fetchFilmData = (payload) => ( { type:"FETCH_FILM_DATA",payload } );
export const fetchMoviesByGenre = (payload) => ( { type:"FETCH_MOVIES_BY_GENRES",payload } );
export const fetchGenres = () => ( { type:"FETCH_GENRES" } );
export const fetchPersonData = ( payload ) => ( { type:"FETCH_PERSON", payload });
export const fetchFilmography = ( payload ) =>({type: "FETCH_FILMOGRAPHY", payload})


