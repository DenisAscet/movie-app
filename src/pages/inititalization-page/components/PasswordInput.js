import styled from "styled-components";

const StyledInput = styled.input`
  padding: 3px ;
  margin: 2%;
  border: 1px solid white;
  border-radius: 7px;
`

export const PasswordInput = (props) => {
    return(
        <StyledInput {...props} />
    )
}