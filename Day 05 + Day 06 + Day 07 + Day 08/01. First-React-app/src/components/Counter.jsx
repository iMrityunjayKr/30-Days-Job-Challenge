import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(10);
  const counterUp = () => {
    
    setCount((prev) => prev + 1);
    setCount(count+1);
    setCount((prev) => prev + 1);
    console.log("up", count);
  };
  const counterDown = () => {
    setCount((prev) => prev - 1);
    console.log("Down", count);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Count = {count}</h2>
      <button onClick={counterUp}>UP</button>
      <button onClick={counterDown}>Down</button>
    </>
  );
}
export default Counter;
