import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [rCount, setRCount] = useState(10);
    return(
        <>
            <h2>Counter: {count}</h2>
            <h2 >Reverse Counter: {rCount}</h2>
            <button onClick={() => setCount(count+1)}>Update Counter</button>
            <button onClick = {() => setRCount(rCount-1)}>Update Reverse Counter</button>

        </>
    )
}

export default Counter;