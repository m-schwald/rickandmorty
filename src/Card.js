import { useState } from "react";
import styled from "styled-components/macro";

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
  console.log(clicked);

  return (
    <CardBox
      onClick={() => setClicked(!clicked)}
      key={id}
      clicked={clicked}
      image={image}
    >
      <GrowBox clicked={clicked}>
        <h2> {name} </h2>
        {clicked && (
          <>
            <section>
              <div>
                {gender === "Male" ? "♂︎" : gender === "Female" ? "♀︎" : "?"}
              </div>
              <div>
                {species === "Human" && gender === "Male"
                  ? "🧔"
                  : species === "Human" && gender === "Female"
                  ? "👩‍🦰"
                  : species === "Alien"
                  ? "👽"
                  : "?"}
              </div>
              <div>
                {status === "Alive" ? "⭐️" : status === "Dead" ? "💀" : "?"}
              </div>
            </section>
            <p> {origin} </p>
          </>
        )}
      </GrowBox>
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

const GrowBox = styled.div`
  background: linear-gradient(darkslategrey, teal);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: ${(props) => (props.clicked ? "-180px" : "-300px")};
  left: 0;
  right: 0;
  transition: ease-in-out 0.3s all;
  text-align: center;
  border: ${(props) => (props.clicked ? "solid 1px chartreuse" : "none")};
  box-shadow: ${(props) => (props.clicked ? "chartreuse 0 3px 10px" : "none")};
`;
