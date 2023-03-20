import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // console.log(state);
  const IncNum = () => {
    setCount(count + 5);
    // console.log("clicked" + count++);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click me</button>
    </>
  );
};
export default App;
