import {Flex, Header} from "../../ui/index"
import {MoviePage, UserPage} from "../../pages";
import { GenresPage} from "../../pages/genres-page";
import { TableWithMovies } from "../../ui/index";
import {HomePage} from "../../pages/home-page";
import {StuffPage} from "../../pages/stuff-page";

export const App = () => {
  return(
      <>
        <Header />
        {/*<UserPage/>*/}
         <StuffPage />
      </>
  )
}
