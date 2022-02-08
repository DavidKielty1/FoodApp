import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import React from "react";

export default function CartButton() {
  return (
    <div className={classes.button}>
      <CartIcon />
      Your Cart
    </div>
  );
}
