import styled from "styled-components";

const Styled = styled.button`
    width: 60px;
    height: 30px;
    border: none;
    margin-top: 20%;
  cursor: pointer;
    img{
        filter:invert();
        width: 50%;
        background-color:#d1d1d1
    }
 
`

export const GenresButton = props => {
    return(
        <Styled {...props}/>
    )
}