import { useRef } from "react";
import UserInput from "./UserInput";

function App() {

  const inputRef = useRef(null);

  const updateInput = () => {
        inputRef.current.value = "Updated Value";
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        inputRef.current.style.color = "red";
  }
  return (
    <>
      <h1>forward Ref</h1>
     <UserInput ref={inputRef} />
     <button onClick={updateInput} >Update Input Field</button>
    </>
  );
}

export default App;