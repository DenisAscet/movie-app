import styled from "styled-components";

const Styled = styled.div`
width: 40%;
  font-size: 20px;
  margin-left: 80px;
  div p {
      margin-left: 10px;
  }
  div{

  } 
`

export const MiddleBlock = props => {
    return(
        <Styled {...props } />
    )
}