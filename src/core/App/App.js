import { Header} from "../../ui/index"
import {MoviePage, UserPage, StuffPage, GenresPage, HomePage, InititalizationPage} from "../../pages";
import {Routes, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {MoviesByGenrePage} from "../../pages/movies-bu-genre-page";

export const App = () => {

    return(
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/login" element={<InititalizationPage />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path={`/movies/:id`} element={<MoviePage />} />
            <Route path={`/genres/:id`} element={<MoviesByGenrePage/>} />
            <Route path={`/stuff/:id`} element={<StuffPage />} />
        </Routes>
    </div>
    )
}
