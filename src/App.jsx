import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect (()=>{
    counterFunction()
  },[])

  useEffect(()=>{
    callOnce();
  },[])

  function callOnce(){
    console.log("callOnce function called");
  }

  function counterFunction (){
    console.log("Counter function called");
  }

  return (
    <>
      <h1>useEffect Hook</h1>
      <button onClick={() =>setCounter(counter+1)}>Counter : {counter}</button>
      <button onClick={()=>setData(data+1)} >Data : {data}</button>
    </>
  );
}

export default App;
