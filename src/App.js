import { arrowFunctionExpression } from "@babel/types";
import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";

function fetchItems() {
  return fetch("https://rickandmortyapi.com/api/character").then((result) =>
    result.json()
  );
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchItems().then((items) => {
      const itemsFetchedFromApi = items.results.map((item) => ({
        id: item.id,
        name: item.name,
        gender: item.gender,
        status: item.status,
        species: item.species,
        //origin: items.origin.name,
        image: item.image,
      }));
      setCharacters(itemsFetchedFromApi);
      console.log(itemsFetchedFromApi);
      console.log(characters);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <CardContainer>
        {characters.map(
          ({ name, id, gender, origin, status, image, species }) => (
            <Card
              name={name}
              id={id}
              species={species}
              gender={gender}
              status={status}
              origin={origin}
              image={image}
            />
          )
        )}
      </CardContainer>
    </div>
  );
}

export default App;

const Header = styled.div`
  background: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F1b%2F1b195a66f61b7036991d19b9a2bb4e7c.jpeg&f=1&nofb=1);
  height: 145px;
  background-size: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
