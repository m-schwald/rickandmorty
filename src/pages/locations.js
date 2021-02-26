import styled from "styled-components";

export default function Locations() {
  async function fetchItems() {
    return fetch("https://rickandmortyapi.com/api/character").then((result) =>
      result.json()
    );
  }

  return (
    <>
      <Flexbox>
        <h1> Locations Page</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.laptopsticker.org%2Fl-m%2Frick-morty-cartoon-silhouette-logo.jpg&f=1&nofb=1" />
      </Flexbox>
    </>
  );
}

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: chartreuse;
  }

  img {
    width: 50px;
  }
`;
