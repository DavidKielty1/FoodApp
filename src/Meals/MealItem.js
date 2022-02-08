import React from "react";

import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";
import Card from "../UI/Card";

export default function MealItem(props) {
  return (
    <div className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <MealItemForm />
    </div>
  );
}