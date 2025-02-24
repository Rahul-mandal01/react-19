import { useState } from "react";
import User from "./User";
function App() {
    // const [display, setDisplay] = useState(true);
    const [count, setCount] = useState(0);
    return(
      <>
        {/* <h1>Toggle in React Js </h1> */}
        {/* <button onClick={() =>setDisplay(!display)}>Toggle</button> */}
        {/* {
          display ? <h2>Abhi Dikh Gya, ab phir click karoge to nahi dikhunga</h2> : null
        } */}

        {/* {
          display ? <User /> : null
        } */}


        {/* with Multiple Condition */}

        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Counter</button>
        {
          count == 0 ? <h2>Condition 0</h2>
          : count == 1 ? <h2>Condition 1</h2>
          : count == 2 ? <h2>Condition 2</h2>
          : count == 3 ? <h2>Condition 3</h2>
          : count == 4 ? <h2>Condition 4</h2>
          : count == 5? <h2>Condition 5</h2>
          :<h2>Other Condition</h2>
        }
      </>
    )

}

export default App;
