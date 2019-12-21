import React from "react";
import "./Button.scss";

const Button = ({ action, className, children, isDisabled, type, onClick }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`button button--${action}${
        isDisabled ? " button--disabled" : ""
      } ${className}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
