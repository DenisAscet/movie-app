import styled from "styled-components";

const Styled = styled.div`
  margin: 0 30%;

`

export const StuffBlock = props => {
    return(
        <Styled { ...props } />
    )
}