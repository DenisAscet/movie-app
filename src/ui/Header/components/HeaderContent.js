import styled from "styled-components";

const StyledHeaderContent = styled.div`
font-size: 40px;
  color: #c2bfcb;
`

export const HeaderContent = (props) => {
    return(
        <StyledHeaderContent {...props} />
    )
}