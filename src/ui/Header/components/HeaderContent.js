import styled from "styled-components";

const StyledHeaderContent = styled.div`
    font-size: 40px;
    color: #c2bfcb;
    border-bottom: #2e2e2e;
  text-decoration: none;
  :checked{
    text-decoration: none;
  }
`

export const HeaderContent = (props) => {
    return(
        <StyledHeaderContent {...props} />
    )
}