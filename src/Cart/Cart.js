import React from "react";

import classes from "./Cart.module.css";

export default function Cart(props) {
  return (
    <div>
      <div className={classes["cart-items"]}>Cart</div>
      <div className={classes.total}>Total Amount</div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onConfirm}>
          Close
        </button>
        <button>Order</button>
      </div>
    </div>
  );
}
