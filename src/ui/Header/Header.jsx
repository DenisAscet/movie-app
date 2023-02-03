import { Flex } from "../index"
import { img } from "../index"
import { button } from "../index"


export const Header = () => {
    return(
        <Flex justifyContent="space-between" margin="10px 5%">
            <Flex margin="0 4%">
                <img src = "https://cdn0.iconfinder.com/data/icons/leisure-and-entertainment-1/64/negative-search-cinema-movies-photography-512.png" height="60px"/>
                <div>
                    name
                </div>
            </Flex>

            <button>
                login
            </button>
        </Flex>
    )
}