import React from "react";
import "./Button.css";

function Button(props) {
  let extraClass;
  switch (props.type) {
    case "nav":
      extraClass = "nav-btn";
      break;
    case "body":
      extraClass = "body-btn";
      break;
    case "outline":
      extraClass = "outline-btn";
      break;
    default:
      return;
  }

  return (
    <div>
      <button className={`btn ${extraClass}`}>
        {props.btnLabel}
        {props.icon}
      </button>
    </div>
  );
}

export default Button;
