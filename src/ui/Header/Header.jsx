import {Flex} from "../index";
import { LoginButton } from "./components";
import { HeaderImage} from "./components";
import { HeaderContent} from "./components";
import {HeaderSearch} from "./components";
import { StyledHeader } from "./styled";
import {ClickableBlock} from "./components";
import {GenresButton} from "./components"

export const Header = () => {

    return(
        <StyledHeader>
            <Flex justifyContent="space-between" margin="10px 7%">
                <ClickableBlock>
                    <Flex margin="0 4%">

                        <HeaderImage src = "https://cdn4.iconfinder.com/data/icons/cinema-2-12/512/Search_movies-512.png"/>
                        <HeaderContent>
                            Movie App
                        </HeaderContent>
                        <GenresButton>
                            <img src="https://cdn-icons-png.flaticon.com/128/2099/2099192.png" />
                        </GenresButton>
                    </Flex>
                </ClickableBlock>
                    <Flex width='30%' >
                        <HeaderSearch>
                        </HeaderSearch>
                        <LoginButton >
                            login
                        </LoginButton>
                    </Flex>
            </Flex>
        </StyledHeader>
    )
}