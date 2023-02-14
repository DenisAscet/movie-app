import styled from "styled-components";

const StyledButton = styled.button`
  height: 70%;
  width: 120%;
  border-radius: 10px;
  border: 1px solid white;
  margin-left: 10px;
  color: grey ; 
`

export const LoginButton = (props) => {
    return(
        <StyledButton {...props} />
    )
}