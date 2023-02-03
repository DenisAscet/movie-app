import styled from "styled-components";

const Styled = styled.img`
  width: 75%;
`
export const GenreImage = props => {
    return(
        <Styled {...props} />
    )
}