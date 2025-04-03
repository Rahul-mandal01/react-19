import { useState } from "react";
import User from "./User.js";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });

  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({...cardStyle, backgroundColor: bgColor});
    setTextColor(textColor);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>Dynamic and Conditional Inline Style in React Js</h1>
      <button onClick={()=> updateTheme('#ccc' , 'red')}>Gray Theme</button>
      <button onClick={()=> updateTheme('white' , 'black')}>Default Theme</button>
      <button onClick={()=> setGrid(!grid)}>Toggle Grid</button>
      <div style={{ display: grid ? 'flex' :'block', flexWrap: "wrap" }}>
        {User.map((user, index) => (
          <div style={cardStyle} key={index}>
            <img style={{ width: "202px" }} src={user.image} />
            <div style={{ padding: "5px", color: textColor }}>
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
