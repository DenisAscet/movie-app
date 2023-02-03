import styled from "styled-components";

const Styled = styled.div`
    img{
      width: 20%;
    }
    
    div{
    margin: 2% 0 ;
      color: grey; 
    }
  font-size: 40px;
  margin: 0 35% ;
`

export const HeaderBlock = ( props ) => {
    return(
        <Styled {...props} />
    )
}