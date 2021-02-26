import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState();

  return (
    <>
      <Flexbox clicked={color}>
        <h1> welcome to the rick and morty universe</h1>
        <img
          onClick={() => setColor(!color)}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.laptopsticker.org%2Fl-m%2Frick-morty-cartoon-silhouette-logo.jpg&f=1&nofb=1"
        />

        <h3> &#8673; click me &#8673; </h3>

        <p>
          We are so happy to provide this amaizing app that gives you deep
          insights into the world of Morty Smith and Rick Sanchez.
        </p>
      </Flexbox>
    </>
  );
}

const Flexbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) =>
    props.clicked ? "black" : "linear-gradient(#000, #0F2027 , #203A43 ); "};
  height: ${(props) => (props.clicked ? "auto" : "75vh ")};
  gap: ${(props) => (props.clicked ? "0" : "3rem ")};
  padding-top: ${(props) => (props.clicked ? "" : "3rem ")};
  transition: 1s all ease-in-out;

  h1 {
    text-align: center;
    padding: 0 3rem;
    color: chartreuse;
  }

  h3 {
    text-align: center;
    color: chartreuse;
    opacity: ${(props) => (props.clicked ? "1" : "0 ")};
    transition: 1s all ease-in-out;
  }

  p {
    opacity: ${(props) => (props.clicked ? "0" : "1 ")};
    transition: 1s all ease-in-out;
    color: chartreuse;
    text-align: center;
    width: ${(props) => (props.clicked ? "1ch" : "40ch ")};
  }
  img {
    width: 50px;
    border-radius: 50%;

    &:hover {
      transform: rotate(720deg) scale(1.6);
      transition: all 1s ease-in-out;
      box-shadow: chartreuse 0 0 20px;
    }
  }
`;
