
function App() {
    const fruit = (name)=> {
      alert(name)
    }

    // const fruit = ()=> {
    //   alert("banana")
    // }
    return(
      <>
        <h1>Event and Function call </h1>
        <button onClick={()=>fruit("apple")}>Apple</button>
        <button onClick={()=>fruit("banana")}>Banana</button>
      </>
    )

}

export default App;
