import "./Button.css";

import React from "react";
import { Link } from "react-router-dom";

const STYLE = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn-large"];

const Button = (props) => {
  const { children, type, onClick, buttonStyle, buttonSize } = props;

  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button className={`btn ${checkButtonSize} ${buttonStyle}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
