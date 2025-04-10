import User from "./User";

function App() {

  const displayName = (name) => {
    alert(`Hello ${name}`);
  }

  const getUser = () => {
    alert('Get User Function Called');
  }

  return (
    <>
     <h1>Call Parent component function from child component</h1>
     <User displayName={displayName} name="Rahul" getUser={getUser} />
     <User displayName={displayName} name="Alice" getUser={getUser} />
     <User displayName={displayName} name="Anil" getUser={getUser} />
     <User displayName={displayName} name="Sidhu" getUser={getUser} />
    </>
  );
}

export default App;