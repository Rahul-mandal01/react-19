// import "./App.css";

import {createElement} from 'react';
import Todo from './Todo';

function App() {
//   const userName = "Rahul";
//   let x = 20;
//   let y = 30;
//   return (
//     <>
//       <h1>Hello {userName}</h1>
//       <h3>{10 + 20 + 30}</h3>
//       <h3>{x * y}</h3>
//       <button onClick={() => alert("Kya haal hai dost!")}>Click Me</button>
//     </>
//   );


    // WITHOUT JSX
    // return createElement("h1", {id:"h1Tag"}, "Hello Rahul");

    // WITH JSX
    // return(
    //   <h1 className="h1Tag" >Hello Rahul</h1>
    // )


    // EXRCISE
    // return(
    //   <>
    //     <Todo/>
    //   </>
    // )
    

    // JSX with Curly Braces

    const name = "Rahul";

    let x = 20;
    let y = 30;
    let path = "https://res.cloudinary.com/dm1wl9cdg/image/upload/v1725198355/cld-sample-5.jpg";

    function fruit(){
      return "Apple";
    }

    function sum(a,b){
      return a+b;
    }

    function operation(a, b, op){
      if(op === "+"){
        return a+b;
      }else if(op === "-"){
        return a-b;
      } else if(op === "*"){
        return a*b;
      } else if(op === "/"){
        return a/b;
      } else{
        return "Invalid Operation";
      }
    }

    const userObj={
      name: "Rahul",
      age: 25,
      city: "Pune"
    }

    const useArray = ['rahul', 'Steve', 'John', 'Alice'];

    return(
      <>
        <h1>JSX with Curly Braces</h1>
        <h3>{name ? name : 'User not found'}</h3>
        <h3>{x+y}</h3>
        <h3>{fruit()}</h3>
        <h3>{sum(10,100)}</h3>
        <h3>{operation(20, 10, "-")}</h3>
        <h3>{userObj.name}</h3>
        <h3>{userObj.age}</h3>
        <h3>{userObj.city}</h3>
        <h3>{useArray[0]}</h3>
        <h3>{useArray[1]}</h3>
        <h3>{useArray[2]}</h3>
        <h3>{useArray[3]}</h3>
        <input typr="text" value={name} id={name} />
        <br/>
        <br/>
        <br/>
        <img src={path} alt="Image" width="300px" height="250px" />
        


      </>
    )


    



}

export default App;
