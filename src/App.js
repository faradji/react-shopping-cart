import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ContentShopping from "./pages/shoppingCart/ContentShopping";
import ContentGame from "./pages/wordGame/ContentGame";
import Home from "./pages/home/HomeContent";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/shoppingcart">
            <ContentShopping />
          </Route>

          <Route path="/wordgame">
            <ContentGame />
          </Route>
        </Switch>
      </main>
      <br />
      <footer>
        <div> Made by ali </div>
      </footer>
    </div>
  );
}

export default App;
