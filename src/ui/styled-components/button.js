import styled from "styled-components";

const StyledButton = styled.button`
  height : ${props => props.height || "0" };
  width: ${props => props.width || "0" };
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  border : ${props => props.border || "1px solid black"};
  border-radius: ${props => props.borderRadius || "0px"};
  background-color: ${props => props.backgroundColor || "none"};
  color :  ${props => props.color || "black"};
`

export const Button = ( props ) => {
    return(
        <StyledButton {...props} />
    )
}