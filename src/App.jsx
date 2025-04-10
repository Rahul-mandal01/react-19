import { useRef } from "react";

function App() {

  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user, password); 
  }

  const handleSubmitRef = (event) => {
    event.preventDefault();

    const user = userRef.current.value;
    const password = passwordRef.current.value;

    console.log(user, password);
    
  }

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm} >
        <input type="text" id="user" placeholder="Enter user name" />
        <br /> <br/>
        <input type="password" id="password" placeholder="Enter user password" />
        <br/> <br/>

        <button>
          Submit
        </button>
      </form>

      <hr/>

      <form onSubmit={handleSubmitRef} method="post" action="">
        <h1>Controlled Component with useRef</h1>
        <input type="text" ref={userRef} id="userRef" placeholder="Enter user name"  />
        <br/> <br/>
        <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter user password"  />
        <br/> <br/>

        <button>
          Submit with Ref
        </button>
      </form>
    </>
  );
}

export default App;