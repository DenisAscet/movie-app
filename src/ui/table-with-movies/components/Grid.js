import styled from "styled-components";

const Styled = styled.div`
  
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: repeat(props.lenth, 10%);
  margin: 0 0 0 15%;
  div{
    margin-bottom: 80px;
  }
  img{
    border-radius: 10px;
    height: 80%;
  }
  p{
    color: #c2bfcb;
    font-size: 20px;
    width: 70%;
    margin-left: 2%;
  }
  h4{
    color: #858992;
    font-size: 14px;
    margin-left: 6%;
    margin-top: 2%

  }
`

export const Grid = props => {
    const length = Math.floor(props.movies.length/3 +1) ;
    return(
        <Styled {...props} length={length}/>
    )
}