import React from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm() {
  return (
    <form className={classes.form}>
      <div>
        <Input />
        <button>+Add</button>
      </div>
    </form>
  );
}
