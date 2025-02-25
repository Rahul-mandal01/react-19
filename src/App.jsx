import { useState } from "react";
import User from "./User";
import Wrapper from './Wrapper';

function App() {
    return(
      <>
       <h1>Jsx with Props in React js</h1>
       <Wrapper color="orange">
        <h1>Hello Everyone</h1>
       </Wrapper>

       <Wrapper>
        <h1>Hello Rahul</h1>
       </Wrapper>

       <Wrapper>
        <h1>Hello Love</h1>
        <h2 style={{color:'red'}}>Please Login</h2>
       </Wrapper>

       <Wrapper>
        <h1>Hello Anil</h1>
       </Wrapper>

       

       {/* DEFAULT PROPS CODE */}
       {/* <User name="Rahul"/>
       <User name="Love"/>
       <User name="Anil"/>
       <User name="Sam"/>
       <User />
       <User name="Robert"/>
       <User /> */}

        

      </>
    )

}

export default App;
