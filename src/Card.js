import styled from "styled-components";

export default function Card({
  name,
  id,
  gender,
  origin,
  status,
  image,
  species,
}) {
  console.log({ name });
  return (
    <CardBox key={id}>
      <img src={image} alt="image" />
      <h2> {name} </h2>
      <ul>
        <li>{gender}</li>
        <li>{species}</li>
        <li>{origin}</li>
        <li>{status}</li>
      </ul>
    </CardBox>
  );
}

const CardBox = styled.section`
  background: linear-gradient(darkslategray, teal);
  border: solid 1px chartreuse;
  box-shadow: chartreuse 0 3px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 80%;
  margin: 1rem auto;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
  ul {
    list-style: none;
  }
`;
