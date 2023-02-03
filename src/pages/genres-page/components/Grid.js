import styled from "styled-components";

const Styled = styled.div`
    margin-left: 14%;
    display: grid;
    grid-template-columns: repeat(4,23%);
    grid-template-rows: 10% repeat(7,20%);
    p{
      font-size: 160%;
      color: #c2bfcb ;
      margin: 2% 5% 0;
      
    }
    h1{
      font-size: 500%;
      color: #c2bfcb;
    } 
`

export const Grid = props => {
    return(
        <Styled {...props} />
    )
}