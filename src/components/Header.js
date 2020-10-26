import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/shoppingcart">
        <h2>shopping</h2>
      </Link>
      <Link to="/wordgame">
        <h2>word game</h2>
      </Link>
      <Link to="/robot">
        <h2>robot game</h2>
      </Link>
    </header>
  );
}

export default Header;
