import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
function Header() {
  const { cartItems } = useContext(Context);

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header
      style={{
        justifyContent: "center",
        paddingRight: "5%",
      }}
    >
      <Link to="/shoppingcart/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
