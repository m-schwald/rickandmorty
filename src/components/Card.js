import { useState } from "react";
import styled from "styled-components/macro";
import Growbox from "./Growbox";
import PropTypes from "prop-types";

export default function Card({
  name,
  id,
  gender,
  origin,
  status,
  image,
  species,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <CardBox
      onClick={() => setClicked(!clicked)}
      key={id}
      clicked={clicked}
      image={image}
    >
      <Growbox
        key={id}
        clicked={clicked}
        name={name}
        species={species}
        gender={gender}
        status={status}
        origin={origin}
      />
    </CardBox>
  );
}

const CardBox = styled.section`
  background: url(${(props) => props.image}),
    linear-gradient(darkslategrey, teal);
  background-repeat: no-repeat;
  border: solid 1px chartreuse;
  box-shadow: chartreuse 0 3px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 1rem 0;
  height: 370px;
  width: 80%;
  margin: 1rem 1rem;
  overflow: hidden;
  max-width: 300px;
  position: relative;
  
  }
  section {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin: 1rem auto 1rem auto;
  }
  div {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
  h2 {
    font-size: 1.3rem;
    color: black;
    text-shadow: chartreuse 3px 3px 10px;
    margin: 1.5rem 0;  


  } 
`;

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  image: PropTypes.string,
};
