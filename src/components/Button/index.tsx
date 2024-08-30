import { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  const decrement = () => setCounter((prevCounter) => prevCounter - 1);

  return (
    <div> 
      <span aria-label="counter">{counter}</span>
      <button aria-label="increment" onClick={increment}>Increment</button>
      <button aria-label="decrement" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Button;
