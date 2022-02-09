import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import React, { useState } from "react";

export default function HeaderCartButton() {
  return (
    <React.Fragment>
      <div className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>0</div>
      </div>
    </React.Fragment>
  );
}
