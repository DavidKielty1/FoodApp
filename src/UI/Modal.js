import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "../UI/Modal.module.css";
import Cart from "../Cart/Cart";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <Cart />
    </div>
  );
};

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}
