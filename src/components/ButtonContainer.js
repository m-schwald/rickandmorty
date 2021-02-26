import styled from "styled-components";
import Button from "./Button";

export default function ButtonContainer({
  onFilterHumans,
  onFilterAliens,
  onFilterAlive,
  showAll,
}) {
  return (
    <StyledButtonContainer>
      <Button text="filter humans" onFilterSpecies={onFilterHumans} />
      <Button text="filter aliens" onFilterSpecies={onFilterAliens} />
      <Button text="filter alive" onFilterSpecies={onFilterAlive} />
      <Button text="show all" onFilterSpecies={showAll} />
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.section`
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 0.3rem;
  }
`;
