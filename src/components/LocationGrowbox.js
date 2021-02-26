import styled from "styled-components";
import PropTypes from "prop-types";

export default function LocationGrowbox({
  clicked,
  name,
  dimension,
  type,
  id,
}) {
  return (
    <StyledGrowbox clicked={clicked}>
      <h2> {name} </h2>
      {clicked && (
        <>
          <p> Dimension: {dimension} </p>
          <p> Type: {type} </p>
        </>
      )}
    </StyledGrowbox>
  );
}

const StyledGrowbox = styled.div`
  background: linear-gradient(darkslategrey, teal);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: ${(props) => (props.clicked ? "0" : "-170px")};
  left: 0;
  right: 0;
  transition: ease-in-out 0.3s all;
  text-align: center;
  border: ${(props) => (props.clicked ? "solid 1px chartreuse" : "none")};
  box-shadow: ${(props) => (props.clicked ? "chartreuse 0 3px 10px" : "none")};
`;

LocationGrowbox.propTypes = {
  clicked: PropTypes.bool,
  name: PropTypes.string,
  dimension: PropTypes.string,
  type: PropTypes.string,
};
