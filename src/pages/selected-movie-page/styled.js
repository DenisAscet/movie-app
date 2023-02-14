import styled from "styled-components";

const Styled = styled.div`
    color: #858992;
    margin: 0 5% ;
`

export const StyledSelectedMovie = props => {
    return(
        <Styled {...props} />
    )
}