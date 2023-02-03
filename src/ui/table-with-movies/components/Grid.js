import styled from "styled-components";

const Styled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(10, 600px);
  div{
    margin-bottom: 80px;
  }
`

export const Grid = props => {
    return(
        <Styled {...props} />
    )
}