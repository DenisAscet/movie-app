import styled from "styled-components";

const Styled = styled.div`
  font-size: 20px;
  margin-left: 80px ;
  a{
    color:#a7a7a7;
    text-decoration: none;
  }
  a :hover{
    color: #c3c9d6;
  }
  h6{
    font-size: 40px;
  }
`

export const RightBlock = props => {
    return(
        <Styled {...props} />
    )
}