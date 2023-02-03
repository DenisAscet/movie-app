import styled from "styled-components";

const StyledHeaderImage = styled.img`
  height: 60px;
  filter:invert();
  background-color:#d1d1d1;
`

export const HeaderImage = (props) => {
    return(
        <StyledHeaderImage {...props}  src={props.src}/>
    )
}