import {Flex} from "../index";
import {Link} from "react-router-dom";
import {
    LoginButton,
    HeaderImage,
    HeaderContent,
    HeaderSearch,
    ClickableBlock,
    GenresButton } from "./components";
import { StyledHeader } from "./styled";

export const Header = () => {

    return(
        <StyledHeader>
            <Flex justifyContent="space-between" margin="10px 7%">
                <ClickableBlock>
                    <Flex margin="0 4%">

                        <HeaderImage src = "https://cdn4.iconfinder.com/data/icons/cinema-2-12/512/Search_movies-512.png"/>
                        <Link to="">
                            <HeaderContent>
                                Movie App
                            </HeaderContent>
                        </Link>
                        <Link to="/genres">
                            <GenresButton>
                                <img src="https://cdn-icons-png.flaticon.com/128/2099/2099192.png" />
                            </GenresButton>
                        </Link>
                    </Flex>
                </ClickableBlock>
                    <Flex width='30%' >
                        <HeaderSearch>
                        </HeaderSearch>
                        <Link to='/login'>
                            <LoginButton >
                                login
                            </LoginButton>
                        </Link>
                    </Flex>
            </Flex>
        </StyledHeader>
    )
}