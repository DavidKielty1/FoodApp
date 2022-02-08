import React from "react";

import MealItem from "./MealItem.js";
import MealItemForm from "./MealItemForm";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import DUMMY_MEALS from "../dummy-meals";

export default function AvailableMeals() {
  return (
    <div className={classes.meals}>
      <Card className={classes.card}>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
        <MealItemForm />
      </Card>
    </div>
  );
}
