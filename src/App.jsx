import { useState } from "react";

function clear(event) {
  console.log(event.target.value);
}

function App() {
  const [user, setUser] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      {/* <h1>Controlled Component</h1> */}
    </>
  );
}

export default App;
