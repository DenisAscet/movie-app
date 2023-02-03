import styled from "styled-components";

const StyledDiv = styled.div`
  cursor: pointer;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  
`

export const ClickableBlock = (props) => {
    return(
        <StyledDiv {...props} />
    )
}