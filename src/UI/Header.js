import React from "react";

import classes from "./Header.module.css";
import CartButton from "./HeaderCartButton.js";

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
        ReactMeals
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={require("../food.jpg")} alt="food" />
      </div>
    </div>
  );
}
