import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (amount = 1) => setCounter(counter + amount);
  const reset = () => setCounter(initialValue);
  const decrement = (amount = 1, allowNegative = true) => {
    if (!allowNegative && counter < 1) return;
    setCounter(counter - amount);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
