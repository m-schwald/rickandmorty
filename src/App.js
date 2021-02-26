import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Characters from "./pages/characters";
import Home from "./pages/home";
import Locations from "./pages/locations";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

const Header = styled.div`
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F1b%2F1b195a66f61b7036991d19b9a2bb4e7c.jpeg&f=1&nofb=1");
  height: 145px;
  width: 350px;
  margin: 0 auto;
  background-size: cover;
`;
