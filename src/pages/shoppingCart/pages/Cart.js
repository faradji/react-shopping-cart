import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const history = useHistory();

  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  };
  const handleClick = () => {
    history.push("/shoppingcart");
  };
  return (
    <div>
      <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {totalCostDisplay}</p>
        {cartItems.length > 0 ? (
          <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
          </div>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </main>
      <button onClick={handleClick}>Go back to all photos</button>
    </div>
  );
}

export default Cart;
