import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Flexbox>
        <h1> welcome to the rick and morty universe</h1>
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
    text-align: center;
    padding: 0 3rem;
    color: chartreuse;
  }

  img {
    width: 50px;
  }
`;
