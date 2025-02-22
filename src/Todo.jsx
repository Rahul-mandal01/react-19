export default function Todo(){
    function callFun(){
        alert("Function called");
    }
    return(
        <>
          <h1>Anil Sidhu Todos</h1>
          <img
            src="https://res.cloudinary.com/dm1wl9cdg/image/upload/v1725198355/cld-sample-5.jpg"
            height="250px" width="300px"
            alt="Anil Sidhu"
          />
  
          <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
          </ul>
  
          <button onClick={callFun}>Click Me</button>
        </>
      )
}