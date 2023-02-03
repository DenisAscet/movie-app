import styled from "styled-components";

const Styled = styled.img`
  border-radius: 15%;
  height: 150px;

`

export const UserImage = (props) => {
    return(
        <Styled {...props} />
    )
}