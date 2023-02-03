import styled from "styled-components";
import {Search} from "react-router";

const Header = styled.div`
    max-height: 20%;
  margin-bottom: 70px;
`

export const StyledHeader = (props) => {
    return (
        <Header {...props} />
    )
}