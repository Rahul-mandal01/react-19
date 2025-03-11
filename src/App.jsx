import { useState } from "react";

function App() {
  return (
    <>
      <h1>Controlled Component</h1>
      <form action="" method="get" >
        <input  type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
        <br/> <br/>
        <input  type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
        <br/> <br/>
        <input  type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" />
        <br/> <br/>

        <button>Submit</button>

        <button onClick={() => {setEmail(''); setName(''); setPassword('')}} >Clear</button>

        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>
      </form>
    </>
  );
}

export default App;
