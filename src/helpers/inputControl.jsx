import { useState } from "react";

/**
 * @return {string} input.
 * Input has the string value that will become a query.
 *
 * @return {function} handleInputChange.
 * Contains a function that will set the user input into the query.
 */
export const useInputChange = () => {
  const [input, setInput] = useState({});
  const handleInputChange = ({ target }) => setInput(target.value);
  return [input, handleInputChange];
};

export const useInputBlur = () => {
  const [input, setInput] = useState({});
  const handleInputChange = () => setInput("");
  return [input, handleInputChange];
};
