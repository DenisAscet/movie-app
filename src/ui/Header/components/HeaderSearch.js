import styled from "styled-components";

const StyledInput = styled.input`
  height: 70%;
  width: 100%;
  border-radius: 5px;
  border: 1px solid white;
  text-align: right;
  padding: 0 15px;
  background-position : 4px;
  color: #a7a7a7;
  outline: none;
  min-width: 115px;
  max-height: 50px;
`

export const HeaderSearch = ( props ) => {
    return(
        <StyledInput {...props} />
    )
}