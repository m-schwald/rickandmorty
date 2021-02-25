import styled from "styled-components"

export default function Button({text,clickHandler}) {
    return <StyledButton onClick={clickHandler}>{text}</StyledButton> 
}

const StyledButton = styled.button`
    background: linear-gradient(teal, darkslategrey);
    padding: 0.5rem 1rem;
    border: 1px solid chartreuse;
    border-radius: 0.3rem;
    color: chartreuse;
`