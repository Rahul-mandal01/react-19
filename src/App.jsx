import { useState } from "react";

function App() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("Kolkata");
  return (
    <>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        name="gender"
        id="male"
        value={"male"}
        onChange={(event) => setGender(event.target.value)}
        checked={gender == "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value={"female"}
        onChange={(event) => setGender(event.target.value)}
        checked={gender == "female"}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender: {gender}</h2>

      <br />
y

      <h4>Select City</h4>

      <select
        defaultValue={"Kolkata"}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="Noida">Noida</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Delhi">Delhi</option>
      </select>

      <h2>Selected City : {city}</h2>
    </>
  );
}

export default App;
