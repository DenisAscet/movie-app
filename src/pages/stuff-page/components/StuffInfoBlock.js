import styled from "styled-components";

const Styled = styled.div`
    color:#c2bfcb ;
  h1{
    font-size: 45px
  }
  div{
    font-size: 20px;
  }
`

export const StuffInfoBlock = props => {
    return(
        <Styled {...props } />
    )
}