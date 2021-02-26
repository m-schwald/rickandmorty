import { useState, useEffect } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import ButtonContainer from "../components/ButtonContainer";

async function fetchItems() {
  return fetch("https://rickandmortyapi.com/api/character").then((result) =>
    result.json()
  );
}

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [originalCharacters, setOriginalCharacters] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    fetchItems().then((items) => {
      const itemsFetchedFromApi = items.results.map((item) => ({
        id: item.id,
        name: item.name,
        gender: item.gender,
        status: item.status,
        species: item.species,
        origin: item.origin.name,
        image: item.image,
      }));
      setCharacters(itemsFetchedFromApi);
      setOriginalCharacters(itemsFetchedFromApi);
    });
  }

  function filterSpecies(species) {
    const humans = originalCharacters.filter(
      (character) => character.species === species
    );
    setCharacters(humans);
  }
  function filterAlive() {
    const alive = originalCharacters.filter(
      (character) => character.status === "Alive"
    );
    setCharacters(alive);
  }

  function filterAll() {
    setCharacters(originalCharacters);
  }

  return (
    <>
      <ButtonContainer
        onFilterHumans={() => filterSpecies("Human")}
        onFilterAliens={() => filterSpecies("Alien")}
        onFilterAlive={filterAlive}
        showAll={filterAll}
      />
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
    </>
  );
}

export default Characters;

const Header = styled.div`
  background: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F1b%2F1b195a66f61b7036991d19b9a2bb4e7c.jpeg&f=1&nofb=1);
  height: 145px;
  width: 350px;
  margin: 0 auto;
  background-size: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
