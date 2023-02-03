import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2e3038;
  border: 1px solid white;
  border-radius: 5px ;
  height: 40px;
  margin: 5% 42%;
  width: 15%;
  font-size: 10px;
`

export const SubmitButton = (props) => {
    return(
        <StyledButton {...props} />
    )
}