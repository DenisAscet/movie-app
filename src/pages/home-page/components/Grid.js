import styled from "styled-components";

const Styled = styled.div`
    margin-left: 14%;
    display: grid;
    grid-template-columns: repeat(4,23%);
    grid-template-rows: repeat(7,20%);
`

export const Grid = props => {
    return(
        <Styled {...props} />
    )
}