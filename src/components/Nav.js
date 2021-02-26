import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <Header>
      <nav>
        <NavLink className="link" exact to="/">
          Home
        </NavLink>
        <NavLink className="link" exact to="/characters">
          Characters
        </NavLink>
        <NavLink className="link" exact to="/locations">
          Locations
        </NavLink>
      </nav>
    </Header>
  );
}
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem 0;

  a {
    margin: 0 0.3rem;
    color: chartreuse;
    text-decoration: none;

    &:hover {
      text-shadow: chartreuse 0px 3px 5px;

      color: black;
    }
  }
`;
