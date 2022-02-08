import React from "react";

import classes from "./MealItemForm.module.css";

export default function MealItemForm() {
  return (
    <form className={classes.form}>
      <label>Amount</label>
      <input type="number" />
      <button>+Add</button>
    </form>
  );
}
