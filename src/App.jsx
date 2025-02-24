import { useState } from "react";
import  Counter  from "./Counter";
function App() {
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana");
  }
    return(
      <>
        <h1>State in React Js </h1>
        <h2>{fruit}</h2>
        <button onClick={handleFruit}> Change Fruit Name </button>
        <Counter/>
      </>
    )

}

export default App;
