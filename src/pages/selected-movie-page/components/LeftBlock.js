import styled from "styled-components";

const Styled = styled.div`
img{
  height: 300px;
  margin-left: 80px;
}
`

export const LeftBlock = props => {
    return(
        <Styled {...props} />
    )
}