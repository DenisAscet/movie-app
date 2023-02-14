import styled from "styled-components";

const Styled = styled.img`
  border-radius: 20px;
  margin: 0 2% 5% 2% ;
  width: 15%;
`

export const StuffImage = props => {
    return(
        <Styled { ...props } />
    )
}