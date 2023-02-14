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
                <Flex>
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