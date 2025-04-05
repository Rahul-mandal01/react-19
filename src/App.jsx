import { useState } from "react";
import User from "./User.js";

function App() {

  return (
    <>
      <h1>External Style in React Js</h1>
      <div>
        {User.map((user, index) => (
          <div key={index}>
            <img src={user.image} />
            <div>
              <h4>{user.name}</h4>
              <p>{user.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
