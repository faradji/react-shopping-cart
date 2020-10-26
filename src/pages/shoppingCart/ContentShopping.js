import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ContextProvider } from "./Context";
import "./styles.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function ContentShopping() {
  const { path } = useRouteMatch();

  return (
    <div>
      <ContextProvider>
        <Header />
        <Switch>
          <Route exact path={`${path}`}>
            <Photos />
          </Route>

          <Route path={`${path}/cart`}>
            <Cart />
          </Route>
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default ContentShopping;
