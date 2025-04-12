import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5

  const addValue = () => {
    // console.log("value added",Math.random());
    // counter++;
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    console.log(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter--;
      console.log(counter);
      setCounter(counter);
    }else alert("counter can't be less than 0")
  };

  return (
    <>
      <h1>Subberscribe Me</h1>
      <h2>Counter Value: {counter}</h2>
      <button id="btn" onClick={addValue}>
        Add Value {counter}
      </button>
      <br />
      <button id="btn" onClick={removeValue}>
        Remove Value {counter}
      </button>
    </>
  );
}

export default App;