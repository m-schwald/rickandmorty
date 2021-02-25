import styled from "styled-components"
import Button from "./Button"

export default function ButtonContainer() {
    return (
        <StyledButtonContainer>
            <Button text="filter humans"/>
            <Button text="filter aliens"/>
            <Button text="filter alive"/>
        </StyledButtonContainer>
    )
}

const StyledButtonContainer = styled.section`
    display: flex;
    justify-content: center;

    & > * {
        margin: 0 0.3rem;
    }
`