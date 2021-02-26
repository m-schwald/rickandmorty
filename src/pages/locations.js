import { useState, useEffect } from "react";
import styled from "styled-components";

import LocationCard from "../components/LocationCard";
import ButtonContainer from "../components/ButtonContainer";

async function fetchItems() {
  return fetch("https://rickandmortyapi.com/api/location").then((result) =>
    result.json()
  );
}

function Locations() {
  const [locations, setLocations] = useState([]);
  const [originalLocations, setOriginalLocations] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    fetchItems().then((items) => {
      const itemsFetchedFromApi = items.results.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        dimension: item.dimension,
      }));
      setLocations(itemsFetchedFromApi);
      setOriginalLocations(itemsFetchedFromApi);
    });
  }

  return (
    <>
      <H2> Locations </H2>
      <CardContainer>
        {locations.map(({ name, id, type, dimension }) => (
          <LocationCard name={name} id={id} dimension={dimension} type={type} />
        ))}
      </CardContainer>
    </>
  );
}

export default Locations;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const H2 = styled.h2`
  color: chartreuse;
  text-align: center;
`;
