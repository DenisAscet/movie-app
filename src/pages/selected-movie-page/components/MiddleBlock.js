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
  img{
    height: 30px;
    margin: 0 10px;
    
  }
  a{
    color:#a7a7a7;
    text-decoration: none;
  }
  a :hover{
    color: #c3c9d6;
  }
`

export const MiddleBlock = props => {
    return(
        <Styled {...props } />
    )
}