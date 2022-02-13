import React, { Fragment } from "react";

import mealsImage from "../../assets/food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious meals" />
      </div>
    </Fragment>
  );
}
