import styled from "styled-components";

const StyledFlex = styled.div `
  display: ${props => props.display || "flex"};
  margin: ${ props => props.margin || "0"};
  flex-direction: ${props => props.flexDirection ||"row"};
  align-content: ${props => props.alignContent || "stretch"};
  justify-content: ${props => props.justifyContent || "stretch"};
  align-self: ${props => props.alignSelf || "stretch"};
  flex-flow:  ${props => props.flexFlow || "row nowrap" };
  height: ${props => props.height || "initial"};
  width: ${props => props.width || "initial"};
`

export const Flex = (props) =>{
    return (
        <StyledFlex {...props} />
    )
}