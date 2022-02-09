import React from "react";

import classes from "../UI/Input.module.css";
export default function Input() {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input type="number" value="1" />
    </div>
  );
}
