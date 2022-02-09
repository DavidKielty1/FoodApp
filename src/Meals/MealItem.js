import React from "react";

import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

export default function MealItem(props) {
  return (
    <ul className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <p className={classes.price}>${props.price}</p>
      </div>
      <MealItemForm />
    </ul>
  );
}
