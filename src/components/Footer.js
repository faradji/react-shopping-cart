import React from "react";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div>
      <h1>
        Made by{" "}
        <a href="https://faradji.se/" target="_blank" rel="noreferrer">
          Ali
        </a>
      </h1>
      <Button
        href="https://github.com/faradji/react-shopping-cart"
        target="_blank"
      >
        Github repo
      </Button>
    </div>
  );
}

export default Footer;
