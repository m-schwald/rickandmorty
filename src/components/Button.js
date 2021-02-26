import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button({ text, onFilterSpecies }) {
  return <StyledButton onClick={onFilterSpecies}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(teal, darkslategrey);
  padding: 0.5rem 1rem;
  border: 1px solid chartreuse;
  border-radius: 0.3rem;
  color: chartreuse;
`;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
