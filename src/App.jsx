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
      <h1>Get Input Field Value</h1>

      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter User Name"
        onBlur={clear} // Call clear when input loses focus
      />
      <h1>{user}</h1>
      <button onClick={() => setUser("")}>Clear Value</button>
      <hr />

      <input
        type="text"
        value={place}
        onChange={(event) => setPlace(event.target.value)}
        placeholder="Enter User Place"
        onBlur={clear}
      />
      <h1>{place}</h1>
      <button onClick={() => setPlace("")}>Clear Value</button>
      <hr />

      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter User Age"
        onBlur={clear}
      />
      <h1>{age}</h1>
      <button onClick={() => setAge("")}>Clear Value</button>
    </>
  );
}

export default App;
