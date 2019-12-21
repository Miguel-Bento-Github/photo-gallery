import React, { useState, useEffect } from "react";
import "./Input.scss";
// TODO fix ref https://reactjs.org/docs/hooks-reference.html#useimperativehandle
function Input({ type, action, isFocused, placeholder, setUserInput }) {
  const [input, setInput] = useState("");

  const changeValue = ({ target }) => setInput(target.value);

  useEffect(() => {
    return setUserInput(input);
  }, [input, setUserInput]);

  return (
    <input
      type={type}
      onChange={changeValue}
      placeholder={`input your ${placeholder} here...`}
      className={`input ${action ? `input-${action}` : ""}`}
      maxLength="100"
      value={input}
      onFocus={isFocused}
    />
  );
}

export default Input;
