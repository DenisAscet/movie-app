import { LoginInput } from "./components/LoginInput";
import { LoginButton } from "../../ui/Header/components/LoginButton";
import { SubmitButton } from "./components/SubmitButton";
import {Flex} from "../../ui";
import {PasswordInput} from "./components/PasswordInput";
import {InitializationPage} from "./styled";
import {HeaderBlock} from "./components/HeaderBlock";

export const InititalizationPage = () => {
    return(
        <InitializationPage>
            <HeaderBlock>
                <Flex>
                    <img src="https://cdn4.iconfinder.com/data/icons/cinema-2-12/512/Search_movies-512.png"/>
                    <div>Movie App</div>
                </Flex>
            </HeaderBlock>
            <Flex flexDirection="column" margin="0 25%">

                Login
                <LoginInput alt="zalupa"/>

                Password
                <PasswordInput/>

                <SubmitButton>
                    Login
                </SubmitButton>
            </Flex>
        </InitializationPage>
    )
}