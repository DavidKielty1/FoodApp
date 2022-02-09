import React, { useState } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";
import Modal from "./Modal";

export default function Header() {
  const [modal, setModal] = useState(false);

  const onClickHandler = () => {
    setModal(true);
  };

  const errorHandler = () => {
    setModal(false);
  };

  
  return (
    <div>
      {modal && <Modal onConfirm={errorHandler} />}
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <div className={classes.button} onClick={onClickHandler}>
          <HeaderCartButton />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={require("../food.jpg")} alt="food" />
      </div>
    </div>
  );
}
