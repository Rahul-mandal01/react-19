import { useState } from "react";
import User from "./User";
import College from "./College";
import Student from "./Student";
function App() {
  // let userName = "Rahul";
  // let age=23;
  // let email="rahul@test.com"

  let userObject1={
    name:"Rahul",
    age:23,
    email:"rahul@test.com"
  }

  let userObject2={
    name:"Anil",
    age:25,
    email:"anil@test.com"
  }

  let userObject3={
    name:"Steve",
    age:30,
    email:"steve@test.com"
  }

  let collegeNames = ['IIT', 'NIT', 'NSEC', 'IIEST', 'JU']
  const[student, setStudent] = useState()
    return(
      <>
       <h1>Props in React js</h1>
       {student && <Student name={student}/>}
       <button onClick={()=>setStudent("Rahul")}>Update Student Name</button>
       <College names={collegeNames[2]}/>
       {/* <User name="Rahul" age="22" email="test@gmail.com"/> */}
        {/* <User name={userName} age={age} email={email} /> */}
       <User user={userObject1}/>
       <User user={userObject2}/>
       <User user={userObject3}/>
      </>
    )

}

export default App;
