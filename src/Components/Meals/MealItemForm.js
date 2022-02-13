import React from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}