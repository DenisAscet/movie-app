import styled from "styled-components";

const StyledImg = styled.img`
  height: ${props => props.height || "0"};
  width: ${props => props.width || "0"};
  
`

export const img = (props) => {
    return(
        <StyledImg {...props} />
    )

}