import React from "react";
import { Switch, Route } from "react-router-dom";
import ContentShopping from "./pages/shoppingCart/ContentShopping";
import ContentGame from "./pages/wordGame/ContentGame";
import RobotContent from "./pages/robot/RobotContent";
import HomeContent from "./pages/home/HomeContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <HomeContent />
          </Route>

          <Route path="/shoppingcart">
            <ContentShopping />
          </Route>

          <Route path="/wordgame">
            <ContentGame />
          </Route>
          <Route path="/robot">
            <RobotContent />
          </Route>
        </Switch>
      </main>
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
