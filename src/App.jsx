import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <h1>Digital Clock in React js</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value={"yellow"}>Yellow</option>
        <option value={"red"}>Red</option>
        <option value={"orange"}>Orange</option>
        <option value={"green"}>Green</option>
      </select>
      <Clock color={color} />
    </>
  );
}

export default App;
