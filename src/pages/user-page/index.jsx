import {UserImage} from "./components/UserImage";
import {Username} from "./components/Username";
import {LikedMovies} from "./components/LikedMovies";
import { UserBlock } from "./components/UserBlock"
import {Flex} from "../../ui";


export const UserPage = () => {
    return(
        <Flex>
            <UserBlock>
                <UserImage src="https://static.okko.tv/images/v2/18844138?width=183&scale=1.2&quality=80&mediaType=webp"/>
                <Username>
                    Akhmed Kadyrov
                </Username>
            </UserBlock>
            <LikedMovies>

            </LikedMovies>
        </Flex>
    )
}